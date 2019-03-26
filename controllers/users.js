const Users = require('../models/user')

function usersAll(req, res) {
  Users
    .find()
    .then(users => res.json(users))
    .catch(e => console.log(e))
}

function usersShow(req, res) {
  Users
    .findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

module.exports = {
  usersAll: usersAll,
  usersShow: usersShow
}
