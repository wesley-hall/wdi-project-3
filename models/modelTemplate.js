// modelTemplate.js - to be deleted once actual models are created
const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema({
  keyString: { type: String, required: true, unique: true },
  keyNumber: { type: Number, required: true, min: 1, max: 5},
  keyDate: { type: Date, required: true},
  keyBoolean: { type: Boolean, required: true }
}, {
  timestamps: true
})

templateSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Template', templateSchema)
