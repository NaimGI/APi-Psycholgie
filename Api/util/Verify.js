import jwt from "jsonwebtoken";
import {CreateError} from "../util/Errors.js";
import localStorage from 'localStorage'

export const verfiyToken= (req,res,next)=>{
    const token= req.cookies.access_token;
    console.log(token);
    if(!token){
      return next(CreateError(401,"Your not authanticated !"));
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return next(CreateError(403,"This token is valid !"));
        }
        req.user=user;
        next();
    })
}
export const VerifyUser =(req,res,next)=>{
    try{
        verfiyToken(req,res,next,()=>{
            if(req.user.id===req.params.id ||req.user.isAdmin){
                next();
            }else{
                return next(createError(403, "You are not authorized!"));
            }
        })
    }catch(err){
        next(err);
    }
}
export const VerifyAdmin =(req,res,next)=>{
    try{
        verfiyToken(req,res,next,()=>{
          if(req.user.isAdmin){
                next();
            }else{
                next(CreateError(403, "You are not authorized!"))
            }
        })
    }catch(err){
        next(err);
    }
}
