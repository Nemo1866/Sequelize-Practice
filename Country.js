

module.exports=(sequelize,DataTypes)=>{
    const Country=sequelize.define("country",{
        countryName:{
            type:DataTypes.STRING,
            unique:true
        }
    },{
        timestamps:false
    })
    return Country
}
