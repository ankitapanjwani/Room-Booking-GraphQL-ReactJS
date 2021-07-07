const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const  userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    
    checkIn: {
        type: Date,
        default: Date.now(),
        required: true
    },
    checkOut: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});




module.exports = mongoose.model("User", userSchema );