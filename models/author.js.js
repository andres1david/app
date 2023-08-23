const mongoose = require('mongoose')

const Schema = mongoose.Schema
const AuthorSchema = new Schema ({
    first_name: {
        type:String,
        require: true,
        maxLength:100
    },
    family_name:{
        type:String,
        require: true,
        maxLength:100
    }
})

module.exports = mongoose.model('Author', AuthorSchema)