const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: [true,"Email has to be unique"]
    },
    password:{
        type: String,
        minlength:8
    },
    option:{
        type:String
    }
})
module.exports = mongoose.model('User',userSchema)