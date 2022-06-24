import {Request,Response} from 'express';
import { user } from '../interfaces/_index';
import { _infoMessaage,resObj } from '../utlis/responseMessage';
import {_httpStatusService} from '../utlis/_httpStatus';
import UserService from '../services/user.service';

 class User extends UserService{
    constructor(){
        super();
    };

    async createUser(req:Request, res:Response){
        try {
            const payload:user = req.body;
            const result  = await super.create(payload);
            return res.status(_httpStatusService.status.OK)
            .json(resObj.create('book',result))

        } catch (error) {
            return res.status(_httpStatusService.status.serverError)
            .json(resObj.error(error))
        }
    }
    async userlogin(req:Request, res:Response){
        try {
            const payload:any = req.body;
            const user = await super.findOne({email: payload.email});
            const userId = user._id
            const token = await super.createJwtToken({email:user.email,userId:user._id})
            return res.status(_httpStatusService.status.OK)
            .json(resObj.loginObj(token,userId))
        } catch (error) {
            return res.status(_httpStatusService.status.serverError)
            .json(resObj.error(error))
        }
    }

   async bookList(req:Request, res:Response){
    try {
        const result = await super.findAllUser();
        return res.status(_httpStatusService.status.OK)
        .json(resObj.list('book',result))
    } catch (error) {
        return res.status(_httpStatusService.status.serverError)
        .json(resObj.error(error))
    }
   }


}


export const UserController = new User()