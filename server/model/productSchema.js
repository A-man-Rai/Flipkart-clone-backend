import mongoose  from "mongoose";

const productScheam=new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object, 
    quantity: Number,
    description:String,
    discount: String, 
    tagline: String
})

const Product= mongoose.model("product",productScheam)

export default Product;