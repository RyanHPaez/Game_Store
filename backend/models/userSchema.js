const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pref_genre: {
        type: String
    },
    pref_system: {
        type: String
    }
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema);