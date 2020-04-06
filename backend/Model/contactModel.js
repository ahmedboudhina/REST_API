const mongoose = require("mongoose")

const contactShcema= mongoose.Schema({
    name: {type : String},
    telephone:{type : Number},
    email:{type : String},
    date : {type : Date,
    default : Date.now}
})



module.exports=mongoose.model('contacts',contactShcema)