const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const bcrypt=require("bcrypt")
const userModel = require("./models/user")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("")



app.listen(5050,()=>{
    console.log("server started")
})