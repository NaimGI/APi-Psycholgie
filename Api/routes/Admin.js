import express from "express";
import {VerifyAdmin,verfiyToken} from "../util/Verify.js";
import {CreateUser,getAllUser,GetUserbyId,deleteUser,UpdatedUser,CountUser,logout} from "../controller/Admin.js";
const router = express.Router();
// Add a new User
router.post("/",CreateUser);
router.get("/auth",verfiyToken,(req,res,next)=>{
    res.send("token is exist !");
})
// Get All users Asdmins
router.get("/",getAllUser);
// logout 
router.get("/logout",logout)
// Get User by Id
router.get("/find/:id",GetUserbyId);
// Delete 
router.delete("/:id",deleteUser);
// Updated User
router.put("/:id",UpdatedUser);

// Count the number of User
router.get("/UserNumber",CountUser);

export default router;