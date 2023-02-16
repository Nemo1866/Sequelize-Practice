require("./connection")
const express=require("express")
const router = require("./router")
const router2=require("./router2")
const app=express()

app.use(express.json())

app.use("/api/students",router)

app.use("/api/country",router2)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})