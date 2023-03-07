const express = require("express")
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const signup = require('./routes/signup')
const login = require('./routes/login')
const mongoose = require("mongoose")
const cors = require('cors')

mongoose.connect("mongodb+srv://ashish:<password>@user.njbl4bf.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("db connected")
    }).catch(() => {
        console.log("db error")
    })

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/signup', signup)
app.use('/login', login)

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log('server is running on 5000')
})
