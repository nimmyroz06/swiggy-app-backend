const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const bcrypt=require("bcrypt")
const userModel = require("./models/user")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("")

app.post("/userSignup",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    console.log(input) 
    let result= new userModel(input)
    result.save()
    res.json({"status":"success"})
    
})

app.listen(5050,()=>{
    console.log("server started")
})