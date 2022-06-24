
import {user} from '../interfaces/_index';
import {userModel} from '../model/_index';
import jwt from 'jsonwebtoken'
export default class userService {
    constructor(){};

    async create(payload:user):Promise<user>{
        try {
            return await userModel.create(payload)
        } catch (error) {
            throw error;
        }
    }
    async genrateUserToken(userId:string):Promise<any>{
        try {
          const _id = userId;
          const user = await userModel.findOne({_id});
         jwt.sign()
        } catch (error) {
            throw error;
        }
    }
    createJwtToken(payload:{userId:string;email:string;}){
        return new Promise(async(resolve, reject) => {
            try {
                const token = await jwt.sign(payload,'test');
                if(token){
                    resolve(token);
                }
                else{
                    reject('Invalid payload data')
                }
            } catch (error) {
                reject(error);
            }
        })
    }
    async findOne(payload:Object):Promise<user>{
        try {
            return await userModel.findOne(payload)
        } catch (error) {
            throw error;
        }
    }
    async findAllUser():Promise<user[]>{
        try {
            return await userModel.find()
        } catch (error) {
            throw error;
        }
    }
    async update(payload:user):Promise<user>{
        try {
            return await userModel.create(payload)
        } catch (error) {
            throw error;
        }
    }
}

