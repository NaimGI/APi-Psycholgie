import express from "express";
import mongoose from "mongoose";
import Children from "../models/Childrens.js";
import Parent from "../models/parents.js";
export const CreatedChildren=async(req,res,next)=>{
    try{
        const idParent=req.params.idParent;
        const ChildrenNew =Children(req.body);
       const savedChildren= await ChildrenNew.save();
       try{
      await Parent.findByIdAndUpdate(idParent,{$push:{Childrens:savedChildren._id}})
      res.status(200).json(savedChildren);
       }catch(err){
        next(err);
       }
       
    }catch(err){
        next(err);

    }
}
export const GetAllchildren =async(req,res,next)=>{
    try{
const AllChildren =await Children.find(); 
res.status(200).json(AllChildren);
    }catch(err){
        next(err);

    }

}
export const UserNumber=async(req,res,next)=>{
try{
const ChildrenNumber =await Children.countDocuments({});
res.status(200).json(ChildrenNumber);
}catch(err){
    next(err);
}
}