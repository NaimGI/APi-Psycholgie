import mongoose from "mongoose";
import User from "../models/Admin.js";
import bcrypt from "bcrypt";

export const CreateUser=async(req,res,next)=>{
   
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const usernew =new User({...req.body,password:hash});
        await usernew.save();
        res.status(200).json("Your User is Created");
    }catch(err){
        next(err);
    }
}
export const getAllUser =async(req,res,next)=>{
    try{
const users=await User.find();
res.status(200).json(users);
    }catch(err){
        next(err);
    }
}
export const GetUserbyId=async(req,res,next)=>{
    try{
     const UserById=await User.findById(req.params.id);
     res.status(200).json(UserById);
    }catch(err){
        next(err);
    }
}
export const deleteUser=async(req,res,next)=>{
    try{
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User is deleted !");
    }catch(err){
    next(err);
    }
}
export const UpdatedUser=async(req,res,next)=>{
    try{
      const UserUpdated=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.status(200).json(UserUpdated);
    }catch(err){
        next(err);
    }
}
export const CountUser=async(req,res,next)=>{
    try{
       const UserNumber=await User.countDocuments({});
          res.status(200).json(UserNumber);
    }catch(err){
        next(err);
    }
}
export const logout =(req,res,next)=>{
    try{
        return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });
    }catch(err){
        next(err);
    }
}