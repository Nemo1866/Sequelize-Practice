
const { Country, Capital } = require("./connection")

module.exports={
    bulkCreate:async(req,res)=>{
        let body=req.body
        // let result=await Country.bulkCreate(body)
        let result=await Capital.bulkCreate(body)
        res.json({
            result:result
        })
    }
}