import {Schema,model} from 'mongoose';
import bcrypt from "bcryptjs";


const userSchema = new Schema({
  email:{
    type:String,
    lowercase:true
  },
  password:{
    type:String,
  },

},{timestamps:true});
userSchema.pre('save', async function (next) {
    try{
        if (this.password) {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }
    } catch(err){
        next(err);
    }
    next();
});

export const userModel = model('user',userSchema)