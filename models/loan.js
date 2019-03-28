const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.ObjectId, ref: 'Book'},
  borrower: { type: mongoose.Schema.ObjectId, ref: 'User'},
  start: { type: Date, required: true},
  end: { type: Date, required: true},
  message: { type: String },
  returned: { type: Date},
<<<<<<< HEAD
  approved: { type: Boolean },
  declined: { type: Boolean }
=======
  approved: { type: Boolean }
>>>>>>> 11d2719edae9d700703803b288125afe6a7f7f09
}, {
  timestamps: true
})

module.exports = mongoose.model('Loan', loanSchema)
