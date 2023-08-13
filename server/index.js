import express from "express"
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./defaultData.js"
import router from "../Routes/route.js"
import cors from "cors"
import bodyParser  from "body-parser";
const app=express();

dotenv.config();
app.use(cors())

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",router)
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

app.listen("9000",()=>{
    console.log("SERVER STARTED AT PORT 9000");
})

//defaultData();