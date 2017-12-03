const express = require('express');
const authenticateController = require('../controllers/authenticateController');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const router = express.Router();

router.post('/', function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) {
            throw err;
        } else if (!user) {
            res.json({
                success: false,
                message: 'Fail: User not found.'
            });
        } else {
            return res.json({
                success: true,
                message: 'User found: these are its data:',
                username: user.username,
                city: user.city,
                cash: user.cash,
                bank_balance: user.bank_balance,
            });
        }
    });
})

module.exports = router;
