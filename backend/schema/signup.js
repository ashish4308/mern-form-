const mongoose = require('mongoose')

const signup = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("signups", signup)