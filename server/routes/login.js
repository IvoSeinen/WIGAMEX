const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
    if (!req.body.username && !req.body.password) {
        res.send({
            success: false,
            message: "no credentials provided"
        })
    } else if (!req.body.username) {
        res.send({
            success: false,
            message: "no username provided"
        })
    } else if (!req.body.password) {
        res.send({
            success: false,
            message: "no password provided"
        })
    } else {
        res.send({
            success: true,
            message: "both a pass and username provided"
        })
    }
})


module.exports = router;
