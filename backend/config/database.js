const mongoose = require('mongoose')
require('dotenv/config')

const mongoUrl=process.env.MONGO_CONNECTION







mongoose.connect(mongoUrl,{ useNewUrlParser: true,useUnifiedTopology: true  } ,(err)=>{
    if (err) console.log("error: ",err)
    else console.log('connect to Data')
})