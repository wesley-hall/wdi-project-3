const Users = require('../models/user')

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

module.exports = {
  usersAll: usersAll,
  userShow: userShow,
  userUpdate: userUpdate
}