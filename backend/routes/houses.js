const express = require('express');
const router = express.Router();
const { allHouses, getHouseById, createHouse } = require('./../controllers/houses');

router.get('/', allHouses);
router.post('/', createHouse);
router.get('/:id', getHouseById);

module.exports = router;
