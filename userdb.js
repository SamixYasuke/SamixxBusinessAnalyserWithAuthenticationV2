const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        unique : true
    },
    firstName : String,
    secondName : String,
    emailAddress : {
        type : String,
        unique : true
    },
    Password : {
        type : String,
        unique : true
    }
}, {
    timestamps : true
});

const User = mongoose.model("User", userSchema);

module.exports = User;