const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        login_name: { type: String, required: true },
        hash: { type: String, required: true }
    }
)

module.exports = mongoose.model('users', User)