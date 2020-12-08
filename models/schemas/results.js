const mongoose = require('mongoose');
const Users = require('./users');

const results = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    quizType: {
        type: String,
        required: true
    },
    quizTakenAt: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Results', results);