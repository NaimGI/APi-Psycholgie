import express from "express";
import {Login,ParentLogin} from "../controller/auth.js";
const router = express.Router();
// get Login Users
router.post("/",Login);
router.post("/login",ParentLogin);
export default router;