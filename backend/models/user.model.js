const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlenght: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlenght: [3, 'Last namemust be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select:false,
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this.id}, process.env.JWT_SECRET);
    return token;
}