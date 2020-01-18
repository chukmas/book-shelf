const express = require("express")
const app =  express()
const index = require("./routes/index")
const mongoose = require("mongoose")
require("dotenv").config()
const expressLayouts = require("express-ejs-layouts")

app.use(expressLayouts)
app.set("view engine", "ejs")


app.use("/", index)
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true },
(err)=>{
    if(!err){console.log("connected to mongoose")}
    else{console.log("an error occured" + err)}
})
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>console.log(`server running on ${PORT}`))