const Genres = require('../models/bookGenre')

function genresAll(req, res) {
  Genres
    .find()
    .then(genres => res.json(genres))
    .catch(e => console.log(e))
}

module.exports = {
  genresAll: genresAll
}
