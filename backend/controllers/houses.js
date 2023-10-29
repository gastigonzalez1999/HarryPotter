const House = require('./../models/houses');
const { findAll, findById } = require('./../services/common');
const { paginationInfo } = require('./../services/pagination');

const allHouses = async (req, res) => {
    const data = await findAll(House, req.query.page);
    const info = paginationInfo({ req, model: House });
    res.json({ data, info });
};

const getHouseById = async (req, res) => {
    const data = await findById(House, req.params.id);
    res.json({ message: `You searched for ${data}` });
};

const createHouse = async (req, res) => {
    try {
        const house = new House(req.body);
        const { id } = await house.save();
        res.json({ message: `House with ${id} inserted` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed' });
    }
};

module.exports = { allHouses, getHouseById, createHouse };
