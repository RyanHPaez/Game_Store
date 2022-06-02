
const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({

    title: {
        type: String
    },

    price: {
        type: Number
    },
    rating: {
        type: String
    },
    platform: {
        type: String
    },
    genre: {
        type: String
    },
    gameImage: {
        type: String
    },

});

module.exports = mongoose.model('Game', GameSchema);
