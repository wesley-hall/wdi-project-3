const Genres = require('../models/bookGenre')

function genresAll(req, res) {
  Genres
    .find()
    .then(genres => res.json(genres))
    .catch(err => console.log(err))
}

module.exports = {
  genresAll: genresAll
}
