const User = require('../models/user')
const Book = require('../models/book')

function usersAll(req, res) {
  User
    .find()
    .then(users => res.json(users))
    .catch(e => console.log(e))
}

function userShow(req, res) {
  User
    .findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

function userUpdate(req, res) {
  User
    .findById(req.params.id)
    .then(user => {
      Object.assign(user, req.body)
      return user.save()
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

function userDelete(req, res) {
  const promiseArray = [
    Book
      .remove({owner: req.params.id}),
    User
      .findByIdAndRemove(req.params.id)
      .exec()
  ]

  Promise.all(promiseArray)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err))
}

function librariesAll(req, res) {
  User
    .find()
    .populate('booksOwned')
    .then(libraries => res.json(libraries.map(library => ({ libraryName: library.libraryName, libraryDescription: library.libraryDescription, location: library.location, books: library.booksOwned, owner: library._id }))))
    .catch(err => res.json(err))
}

module.exports = {
  usersAll: usersAll,
  userShow: userShow,
  userUpdate: userUpdate,
  userDelete: userDelete,
  librariesAll: librariesAll
}
