const zlib = require("zlib")


module.exports=(sequelize,DataTypes)=>{
let Student=sequelize.define("student",{
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },studname:{
        type:DataTypes.STRING,
        allowNull:false,
      
    },favclass:{
        type:DataTypes.STRING,
        defaultValue:'Computer Science'
    },schoolyear:{
      type:DataTypes.INTEGER  ,
      allowNull:false
    },description:{
       type:DataTypes.STRING,
        set(value){
            let compressed= zlib.deflateSync(value).toString("base64")
            this.setDataValue('description',compressed)
        },
        get(){
            let value=this.getDataValue("description")
            let uncompressed= zlib.inflateSync(Buffer.from(value,"base64"))
            return uncompressed.toString()
        }
    }
},{
    timestamps:false,
    
})

return Student
}