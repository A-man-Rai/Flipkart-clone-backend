import express from "express";
import User from "../server/model/userSchema.js"
import Product from "../server/model/productSchema.js"
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const exist = await User.findOne({ emailPhone: req.body.emailPhone });
    if (exist) {
      return res.status(401).json({ message: "User already registered." });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message:user.emailPhone });
  } catch (err) {
    console.error(err); // Log error on server side
    res.status(500).json({ message: "An error occurred. Please try again later." });
  }
});

router.post("/login",async(req,res)=>{
  try {
    const user = await User.findOne({ emailPhone:req.body.emailPhone , password:req.body.password  });
    if(user){
      return res.status(200).json({ message:user.emailPhone });
      
    }else{
      return res.status(401).json('invalid login');
    }
   
  } catch (err) {
    res.status(500).json('error',err.mssage)
   
  }
})

router.get("/products",async(req,res)=>{
  try{
   const products=await Product.find({});
   res.status(200).json(products)
  }
  catch(err){
   res.status(500).json({message:err.message})
  }
})

router.get("/product/:id",async(req,res)=>{
try{
   const id=req.params.id;
  const product=await  Product.findOne({'id':id})
  res.status(200).json(product)
}
catch(err){
res.status(500).json({message:err.message})
}
})

export default router;
