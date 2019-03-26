const Users = require('../models/user')

function usersAll(req, res) {
  Users
    .find()
    .then(users => res.json(users))
    .catch(e => console.log(e))
}

module.exports = {
  usersAll: usersAll
}
