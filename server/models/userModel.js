'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: {              // EMAIL IS UNIQUE ID.
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: 'Utrecht'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('test', UserSchema);
module.exports = User;


