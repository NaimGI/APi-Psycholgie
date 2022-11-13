import express from "express";
import mongoose from "mongoose";
import {CreatedChildren,GetAllchildren,UserNumber} from "../controller/Childrens.js";
const router=express.Router();
router.post("/:idParent",CreatedChildren);
router.get("/",GetAllchildren);
router.get("/UserNumber",UserNumber);

export default router;

