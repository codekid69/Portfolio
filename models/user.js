const mongoose=require('mongoose');
const Userschema= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    message:{
        type:String,
    }
},{timestamps: true});

module.exports=mongoose.model('User',Userschema);