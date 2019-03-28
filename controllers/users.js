const Users = require('../models/user')
const Books = require('../models/book')

function usersAll(req, res) {
  Users
    .find()
    .then(users => res.json(users))
    .catch(e => console.log(e))
}

function userShow(req, res) {
  Users
    .findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

function userUpdate(req, res) {
  Users
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
    Books
      .remove({owner: req.params.id}),
    Users
      .findByIdAndRemove(req.params.id)
      .exec()
  ]

  Promise.all(promiseArray)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err))
}

module.exports = {
  usersAll: usersAll,
  userShow: userShow,
  userUpdate: userUpdate,
  userDelete: userDelete
}
