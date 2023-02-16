require("dotenv").config()
const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:"mysql",
    logging:false
})


const User=sequelize.define("user",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

const Post=sequelize.define("post",{
    message:{
        type:DataTypes.STRING,
        allowNull:false}
})
let user,post;

User.hasMany(Post)
Post.belongsTo(User)

sequelize.sync({alter:true}).then(()=>{
  return User.findOne({where:{username:"nammy18"}})
}).then((data)=>{
    user=data
    return Post.findOne()
}).then((data)=>{
    post=data
    user.removePosts(post)
})
.catch(err=>{
    console.log(err);
})