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

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
  };

const User = mongoose.model('realUser', UserSchema);
module.exports = User;


