

module.exports=(sequelize,DataTypes)=>{
const Capital=sequelize.define("capital",{
    capitalName:{
        type:DataTypes.STRING,
        unique:true
    }

},{
    timestamps:false
})
return Capital
}