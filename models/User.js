const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    lastName:{type: String, required: true},
    mail:{type: String, required: true},
    password:{type: String, required: true},
    photo:{type: String, required: true},
    country:{type: String, required: true},
    from: [{type:String, required:true}], 
    logged: {type:Boolean, required:true}, 
    verified: {type:Boolean, required:true}, 
    code: {type:String, required:true},
    role: {type:String, required:true}, 
})

const User = mongoose.model(
    'users',
    schema
)

module.exports = User