const { Op } = require("sequelize")
let {Students, sequelize}=require("./connection")

module.exports={
    createBulk:async(req,res)=>{
        let body=req.body
  
        let result=await Students.bulkCreate(body)
        res.json({
            result:result
        })
        
    },findSome:async(req,res)=>{
        let result = await Students.findAll({where:{
            [Op.or]:{
                favclass:"Computer Science",
                schoolyear:2023
            }
        }})
        res.json({
            data:result
        })
        // let result =sequelize.query("Select * from students where favclass='Computer Science'")
    },findAll:async(req,res)=>{
        let result =await Students.findAll()
       res.json({
        message:result
       })
    },findOrCreate:async(req,res)=>{
        let result =await Students.findOrCreate({
            where:{
                studname:"Harsh",schoolyear:2015
            }
        })
        res.json({
            result:result
        })
    },findAndCountAll:async(req,res)=>{
        let {result,count}=await Students.findAndCountAll({where:{studname:"naeem"}})
        res.json({
            result:count
        })
    }

}