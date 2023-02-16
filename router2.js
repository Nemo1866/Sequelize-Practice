const { bulkCreate } = require("./association")

const router=require("express").Router()



router.post("/",bulkCreate)


module.exports=router


