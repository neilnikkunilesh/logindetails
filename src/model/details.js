const mongoose = require('mongoose')
const validator = require('validator')

const logindetails = mongoose.model('logindetails',{
    _id: { type: Number, 
        validate(value){
            if(value < 0){
                throw new Error('ID must be positive number')
            }
        }    
    },
    name: { type: String },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }

    },
    role: {type: String}
    
})

// We want to export user so other files like Index.js can use it to create users.
module.exports = logindetails;