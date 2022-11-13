import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  phone: {
    type: String,
    required: true,
  },
  img:{
    type:String
},

  
},{ timestamps: true });
export default mongoose.model("User",UserSchema);