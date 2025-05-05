const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    gender:{ 
        type: Number,
        enum: [0, 1], // 1 = Male, 0 = Female
        default: 1
    },
    password:{
        type: String,
        required: true
    },
    registrationDate:{
        type: Date,
        default: Date.now
    },
    isPremium:{
        type: Boolean,
        enum: [true, false],
        default: false
    },
    locationLatitude:{
        type: Number
    },
    locationLongitude:{
        type: Number
    },
    token: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
