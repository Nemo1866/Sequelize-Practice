const router=require("express").Router()
const {createBulk, findSome, findAll, findOrCreate, findAndCountAll}=require("./controller")

router.post("/",createBulk)
router.get("/",findAll)
router.get("/find",findSome)
router.get("/findcreate",findOrCreate)
router.get("/findcount",findAndCountAll)

module.exports=router