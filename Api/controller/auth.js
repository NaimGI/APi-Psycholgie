import mongoose from "mongoose";
import express from "express"
import bcrypt from "bcrypt";
import User from "../models/Admin.js";
import Parent from "../models/parents.js";
import {CreateError} from "../util/Errors.js";
import jwt from "jsonwebtoken";


export const Register=async(req,res,next)=>{
try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
const parents=new Parent({...req.body,password:hash});
await parents.save();
res.status(200).json("Your Users Is register !");
}catch(err){
next(err);
}
}
export const ParentLogin=async(req,res,next)=>{
    try {
        console.log(req.body.first_name,req.body.last_name,req.body.email);

        const parents=await Parent.findOne({first_name:req.body.first_name,last_name:req.body.last_name,email:req.body.email});
        if(!parents){
            return next(CreateError(404,"Parent not found"));
        }
        const isPassword=await bcrypt.compare(req.body.password,parents.password);
        if(!isPassword){
            return next(CreateError(400,"Wrong password or Email"));
        }
        const token=jwt.sign({id:parents._id},"NaimBen");
        console.log(token);
        const {password,...otherDetail}=parents._doc;
        res.cookie("Token",token,{httpOnly: true}).status(200).json({detail:{...otherDetail}});

    } catch (error) {
        next(error);
    }
}

export const Login =async(req,res,next)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        console.log(req.body.password); 
        if(!user){
            return next(CreateError(404, "User not found!"));
        }
        const isPassword=await bcrypt.compare(req.body.password,user.password);
        if(!isPassword){
            return next(CreateError(400, "Wrong password or username!"));
        }
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT);
     
       const {password,isAdmin,...otherDetail}=user._doc;
       res.cookie("access_token",token,{httpOnly: true}).status(200).json({detail:{...otherDetail},isAdmin});
       
    }catch(err){
    next(err);
    }
}