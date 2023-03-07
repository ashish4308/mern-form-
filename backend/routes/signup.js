const express = require('express')
const router = express.Router()
const signups = require('../schema/signup')



router.post('/', (req, res) => {
    const user = new signups({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    signups.find({ email: req.body.email })
        .then((r1) => {
            if (r1.length === 0) {
                user.save()
                    .then((r) => {
                        res.status(201).json({ msg: "done", cred: r })
                    })
            } else {
                res.status(404).json({ msg: "alredy exist" })
            }
        })



})



router.get('/', (req, res) => {
    signups.find()
        .then((r) => {
            res.send(r)
        })

})
module.exports = router