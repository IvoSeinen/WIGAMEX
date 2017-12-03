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
    confirmed: {
        type: Boolean,
        default: false
    },
    city: {
        type: String,
        default: 'Utrecht'
    },
    hitpoints: {
        type: Number,
        default: 100
    },
    skill_charisma: {
        type: Number,
        default: 0
    },
    skill_X: {
        type: Number,
        default: 0
    },
    skill_Y: {
        type: Number,
        default: 0
    },
    cash: {
        type: Number,
        default: 0
    },
    bank_balance: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
  };

const User = mongoose.model('realUser', UserSchema);
module.exports = User;


