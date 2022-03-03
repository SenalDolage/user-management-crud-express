const mongoose = require('mongoose');

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

const UserDb = mongoose.model('users', schema);

module.exports = UserDb;
