const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const users = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

users.statics.checkExists = async function(email) {
    return await this.exists({emailAddress: email});
}

users.statics.checkPassword = async function(email, password) {
    const user = await this.findOne({emailAddress: email})
    if (!user) {
        return false;
    }
    if (await bcrypt.compare(password, user.password)) {
        return true;
    }
    return false;
}

module.exports = mongoose.model('Users', users); 