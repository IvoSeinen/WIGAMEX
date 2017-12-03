const express = require('express');
const authenticateController = require('../controllers/authenticateController');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');
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
        User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) {
                throw err;
            } else if (!user) {
                res.json({
                    success: false,
                    message: 'Authentication failed. User not found.'
                });
            } else if (user) {
                if (user.password !== req.body.password) {
                    res.json({
                        success: false,
                        message: 'Authentication failed. Wrong password.'
                    });
                } else {
                    return res.json({
                        success: true,
                        message: 'username & password match',
                        username: user.username,
                        city: user.city,
                        cash: user.cash,
                        bankBalance: user.bankBalance,
                        token: jwt.sign({
                            username: user.username
                        }, 'RESTFULAPIs')
                    });
                }
            }
        });
    }
})

module.exports = router;
