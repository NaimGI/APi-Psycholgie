import mongoose from 'mongoose';
const { Schema } = mongoose;

const ParentsSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
      },
  password:{
    type:String,
    required:true,
  },
  first_name:{
     type:String,
     required:true
  },
  last_name:{
    type:String,
    required:true
  },
  Childrens:{
    type:[String]
  },
  birthday_date:{
  type:Date,
  required:true
  },
  img:{
    type:[String]
  },
  phone: {
    type: String,
    required: true,
  },
  result:{
    type:[String]
  },
  solution:{
    type:[String]
  }


  
},{ timestamps: true });
export default mongoose.model("parents",ParentsSchema);