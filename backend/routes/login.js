const express = require('express')
const router = express.Router()
const signups = require('../schema/signup')


router.post('/', (req, res) => {

    signups.find({ email: req.body.email })
        .then((r) => {
            if (r.length === 0) {
                //does not exist
                res.status(400).json({ msg: 'User does not exist, try again with a different email' })

            } else {
                if (r[0].password === req.body.password) {
                    res.status(200).json({ msg: "login succ", cred: r })
                } else {
                    res.status(404).json({ msg: "wrong pass" })
                }
                // console.log(r)
            }
        })
        .catch((e) => {
            console.log("pop");
        })

})





router.get('/', (req, res) => {
    res.send('login')

})

module.exports = router