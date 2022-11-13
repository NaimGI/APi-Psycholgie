import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/Admin.js";
import ParentsRoute from "./routes/parents.js";
import AuthRoute from "./routes/auth.js";
import ChildrenRoute from "./routes/Childrens.js";
import cookieParser from  "cookie-parser";
import localStorage from 'localStorage'
import cors from "cors";
const app=express();
dotenv.config();
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,  
  optionSuccessStatus:200 ,  
}


const connect =async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
       throw error;
      }   
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongo db disconnected");
});
mongoose.connection.on("connected",()=>{
    console.log("mongo db connected");
});
//Midelware
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/api/Admin",userRoute);
app.use("/api/Parent",ParentsRoute);
app.use("/api/auth",AuthRoute);
app.use("/api/Children",ChildrenRoute);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  

app.listen(5000,()=>{
    connect();
    console.log("Connected to back end");
})