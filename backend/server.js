const express = require("express")
const app = express();
require('./config/database')
const contact = require("./Routes/contactRoutes")
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.use('/contact',contact)








app.listen(4000, (err) =>{
    if (err) console.log('sercer is not Running')
    else console.log('server is running')
})