const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/', function (req, res) {
    new User({
        username: req.body.username,
        _id: req.body.email,
        password: req.body.password
    }).save(function(err, doc){
        if (err) {
            res.json(err);
        } else {
            res.send({
                success: true,
                message: "You have been succesfully put in the database"
            })
        }
    })
})

module.exports = router;
