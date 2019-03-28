const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.ObjectId, ref: 'Book'},
  borrower: { type: mongoose.Schema.ObjectId, ref: 'User'},
  start: { type: Date, required: true},
  end: { type: Date, required: true},
  message: { type: String },
  approved: { type: Boolean },
  declined: { type: Boolean },
  collected: { type: Date },
  returned: { type: Date}
}, {
  timestamps: true
})

module.exports = mongoose.model('Loan', loanSchema)
