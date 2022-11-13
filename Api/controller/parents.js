import express from "express";
import mongoose from "mongoose";
import Parent from "../models/parents.js";
import bcrypt from "bcrypt";
import Children from "../models/Childrens.js";

export const CreateParent=async(req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
const parents=new Parent({...req.body,password:hash});
await parents.save();

res.status(200).json(parents);
    }catch(err){
        next(err);
    }
}
export const GetAllParents=async(req,res,next)=>{
    try{
const listParent=await Parent.find();
res.status(200).json(listParent)

    }catch(err){
        next(err);
    }
}
export const GeParentById=async(req,res,next)=>{
    try{
        const PrentById=await Parent.findById(req.params.id);
        res.status(200).json(PrentById);

    }catch(err){
        next(err);

    }
}
export const DeleteByID =async(req,res,next)=>{
    try{
        await Parent.findByIdAndDelete(req.params.id);
        res.status(200).json("Parents Deleted");

    }catch(err){
        next(err);
    }

}
export const UpdateParents=async(req,res,next)=>{
    try{
const listParent=await Parent.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
res.status(200).json(listParent);
    }catch(err){
        next(err);
    }
}
// Count the number of child of this parent
export const ChildNumberParent =async(req,res,next)=>{
    try {
        const parents =await Parent.findById(req.params.id);
        const number=parents.Childrens.length;
        res.status(200).json(number);
    } catch (error) {
        next(error)
    }
}
export const UserNumber =async(req,res,next)=>{
    try{
        const CountParents=await Parent.countDocuments({});
        res.status(200).json(CountParents);

    }catch(err){
      next(err);
    }
}
export const getChild= async(req,res,next)=>{
    try {
        const parentInfo=await Parent.findById(req.params.id);
        console.log(parentInfo);
        const childrenList=await Promise.all(
            parentInfo.Childrens.map((child)=>{
             return Children.findById(child);
            })
            );
            res.status(200).json(childrenList);
    }catch(err) {
         next(err);   
    }
}
export const ParentLogout=(req,res,next)=>{
    try {
        return res.clearCookie("Token").status(200).json({message:"Your are logout !"});
    } catch (error) {
        next(error);
    }
   
}