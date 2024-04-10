const cakeModel = require('../models/cakeModel');

function getCakes(req, res, next) {
    cakeModel.find()
        .then(cakes => res.json(cakes))
        .catch(next);
}

function getCake(req, res, next) {
    const { cakeId } = req.params;

    cakeModel.findById(cakeId)
        .then(cake => res.json(cake))
        .catch(next);
}

module.exports = {
    getCakes,
    getCake
}