
const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
        unique: true
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
    }
},{timestamps: true});

module.exports = mongoose.model('Game', GameSchema);
