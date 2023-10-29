const { Schema, model } = require('mongoose');

const HouseSchema = Schema({
    name: {
        type: String,
        required: true
    },
    headMaster : {
        type: String,
        required: true
    },
    ghost : {
        type: String,
        required: true
    },
    shield : {
        type: String,
        required: true
    },
    hymn : {
        type: String,
        required: true
    },
    thumbnail : {
        type: String
    },
    colors : {
        type: String,
        require: true
    },
    animal : {
        type: String,
        require: true
    },
    commonRoom : {
        type: String, 
        require: true
    },
    founder : {
        type: String,
        require: true
    },
    history : {
        type: String,
        require: true
    },
});

module.exports = model('House', HouseSchema);