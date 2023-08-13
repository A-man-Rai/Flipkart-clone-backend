import mongoose  from "mongoose";

const userScheam=new mongoose.Schema({
    emailPhone:{
        type:String,
        unique:true,
        required:true,
        sparse: true 
    },
    password:String,
    confirm:String
})

const User= mongoose.model("user",userScheam)

export default User;