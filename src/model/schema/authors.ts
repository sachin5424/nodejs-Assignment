import {Schema,model} from 'mongoose';



const authorSchema = new Schema({
  name:{
    type:String,
    lowercase:true
  },
  age:{
    type:Number,
  },
  dateOfBirth:{
    type:Date,
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:"user"

  }
},{timestamps:true});


export const authorModel = model('author',authorSchema)