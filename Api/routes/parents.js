import express from "express";
import {CreateParent,GetAllParents,GeParentById,DeleteByID,UpdateParents,UserNumber,getChild,ParentLogout,ChildNumberParent} from "../controller/parents.js";
import {VerifyAdmin} from "../util/Verify.js";

const router=express.Router();

router.post("/",CreateParent);
// Get All Parents
router.get("/",GetAllParents);
// Get By id 
router.get("/find/:id",GeParentById);
// Deleted Parents
router.delete("/:id",VerifyAdmin,DeleteByID);
// Update Parents
router.put("/:id",VerifyAdmin,UpdateParents);
router.get("/UserNumber",UserNumber);
// Get all the children of parents
router.get("/childParent/:id",getChild);
// Lohout of parents
router.get("/logout",ParentLogout);
// Get the children number of one parent
router.get("/ChildCount/:id",ChildNumberParent);

export default router;