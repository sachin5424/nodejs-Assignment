import {Schema,model} from 'mongoose';



const bookSchema = new Schema({
  name:{
    type:String,
  },
  published:{
    type:Schema.Types.ObjectId,
    ref:"author"
  },
  price:{
    type:Number,
  }
},{timestamps:true});


export const bookModel = model('book',bookSchema)