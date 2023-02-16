require("dotenv").config()
const {Sequelize,DataTypes}=require("sequelize")
const {Capital,Country}=require("./Capital")

const sequelize=new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:"mysql",
    logging:false
})

sequelize.authenticate().then(()=>{
    console.log("Database is Connected");
}).catch(err=>{
    console.log("Error "+err);
})

let db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.Students=require("./student")(sequelize,DataTypes)
db.Capital=require("./Capital")(sequelize,DataTypes)
db.Country=require("./Country")(sequelize,DataTypes)

db.Country.hasOne(db.Capital)

let country,capital;

sequelize.sync({alter:true}).then(()=>{
return db.Capital.findOne({where:{capitalName:"Peris"}})
}).then((data)=>{
    capital=data
 return db.Country.findOne({where:{countryName:"France"}})
}).then((data)=>{
  country=data
  country.setCapital(capital)
}).catch(err=>{
    console.log(err);
})

module.exports=db