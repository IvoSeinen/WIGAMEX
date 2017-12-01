const express = require('express');
const authenticateController = require('../controllers/authenticateController');
const router = express.Router();
const jwt = require('jsonwebtoken');

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
        // const token = authenticateController.createToken();
        // console.log('token: ' + token);
        res.send({
            success: true,
            message: "both a pass and username provided"
        })
    }
})


module.exports = router;
