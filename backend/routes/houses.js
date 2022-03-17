const express = require('express');
const router = express.Router();
const { allHouses, getHouseById } = require("./../controllers/houses");

router.get('/', allHouses);
router.get('/:id', getHouseById);


module.exports = router;