//const allHouses = require('./../models/houses');

const allHouses = (req, res) => {
    res.json({ message: "Casas"});
}

const getHouseById = (req, res) => {
    res.json({ message : `You searched for ${req.params.id}`});
}

module.exports = { allHouses, getHouseById }