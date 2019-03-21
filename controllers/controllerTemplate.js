// controllerTemplate.js - to be deleted once actual controllers are created

const Template = require('../models/modelTemplate')

// Insert route functions here
// e.g. indexRoute
function indexRoute(req, res) {
  return Template
    .find(req.query)
    .then(animals => res.status(200).json(animals))
    .catch(err => res.json(err))
}


// Export route functions here
module.exports = {
  index: indexRoute
  // create: createRoute,
  // show: showRoute,
  // update: updateRoute,
  // destroy: destroyRoute
}
