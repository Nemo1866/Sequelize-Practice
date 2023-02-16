require("dotenv").config()
const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:"mysql",
    logging:false
})


const Customer=sequelize.define("customer",{
    customername:{
        type:DataTypes.STRING,
        allowNull:false
    }},{
        timestamps:false
    })

const Product=sequelize.define("product",{
    productname:{
        type:DataTypes.STRING,
        allowNull:false}
},{
    timestamps:false
})
let customer,product;

Customer.belongsToMany(Product,{through:"customerproduct"})
Product.belongsToMany(Customer,{through:"customerproduct"})

sequelize.sync({alter:true}).then(()=>{
return Product.findOne({where:{productname:"Mouse"}})
    
}).then((data)=>{
    product=data
    return Customer.findAll()
}).then((data)=>{
    customer=data
    product.addCustomers(customer)
}).catch(err=>{
    console.log(err);
})