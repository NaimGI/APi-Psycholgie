import mongoose from 'mongoose';
const { Schema } = mongoose;

const childrenSchema = new Schema({
  first_name:{
     type:String,
     required:true
  },
  last_name:{
    type:String,
    required:true
  },
  birthday_date:{
  type:Date,
  required:true
  },
  sexe:{
    type:String,
    required:true
  },
  parentsCase:{
    type:String,
    required:true,
  },
  img:{
    type:[String]
  },
  test:{
    type:[String]
  },
  solution:{
    type:[String]
  }
},{ timestamps: true });
export default mongoose.model("children",childrenSchema);