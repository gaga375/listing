
let mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoos = require("passport-local-mongoose");

let userSchema = new Schema ({
    email:{
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoos);
module.exports = mongoose.model("user",userSchema);