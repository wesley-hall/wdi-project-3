// modelTemplate.js - to be deleted once actual models are created
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userRatingSchema = new mongoose.Schema({
  rating: { type: Number }
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  profilePicture: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  libraryName: { type: String, required: true, unique: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  libraryPicture: { type: String},
  libraryDescription: { type: String },
  userRating: [ userRatingSchema ]
}, {
  timestamps: true
})
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPassword(next) {
  if (this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)
