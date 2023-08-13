import {products} from "./constant/data.js"
import Product from "./model/productSchema.js"

const DefaultData=async()=>{
    try{
        
       await Product.insertMany(products)
        console.log("Data imported Successfully");
    }
    catch(error){
        console.log(error.message);
    }
}

export default DefaultData;