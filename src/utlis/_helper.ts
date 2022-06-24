import { userModel } from '../model/_index';
import {Request} from 'express'
import jwt from 'jsonwebtoken'
var JWT_SECREATE_kEY = 'test';
import bcryptjs from 'bcryptjs'

export const _tokenDecode =(req:Request)=>{
     var token = req.headers.authorization.split(' ')[1];
    return new Promise(async(resolve, reject) =>{
        try {
            var decode: any = jwt.verify(token, JWT_SECREATE_kEY);
            if(!decode) reject("Invalid token");
            let userId = decode.userId;
            const user = await userModel.findOne({_id:userId});
            if(!user) reject("Invalid token");
            resolve(user);

        } catch (error) {
            reject(error);
        }
    })
}


export const passwordDecode = (payload:{email:string, password:string})=>{
   return new Promise<Boolean>(async(resolve, reject) =>{
      try {
        console.log(payload);
        
        const data = await userModel.findOne({email:payload.email})
        const password = await bcryptjs.compare(payload.password,data.password);
        if(password ===true){
            resolve(true)
        }
         reject(false)
      } catch (error) {
        reject(error);
      }
   })
}

export const aggregate = (model:any,filter:any) =>{
    return new Promise((resolve,reject)=>{
       
        model.aggregate(
            filter
        ).exec( function (err:any, invites:any) {
            if (err) {
             reject(err)
            }
            resolve(invites)
          }
        );
    })  
}