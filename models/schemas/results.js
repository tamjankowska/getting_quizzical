const mongoose = require('mongoose');
const Users = require('./users');

const results = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    points: {
        type: Number
    },
    category: {
        type: String
    },
    difficulty: {
        type: String
    },
    quizType: {
        type: String
    }
})

module.exports = mongoose.model('Results', results);