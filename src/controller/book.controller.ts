import {Request,Response} from 'express';
import { book } from '../interfaces/_index';
import { _infoMessaage,resObj } from '../utlis/responseMessage';
import {_httpStatusService} from '../utlis/_httpStatus';
import BookService from '../services/book.service';
import { _tokenDecode } from '../utlis/_helper';


 class Book extends BookService{
    constructor(){
        super();
    };

    async createBook(req:Request, res:Response){
        try {
            const payload:book = req.body;
            const result  = await super.create(payload);
            return res.status(_httpStatusService.status.OK)
            .json(resObj.create('book',result))

        } catch (error) {
            return res.status(_httpStatusService.status.serverError)
            .json(resObj.error(error))
        }
    }

   async bookList(req:Request, res:Response){
    try {
        // console.log(req); 
        // const userId = await _tokenDecode(req);
        const result = await super.findAllBook();
        return res.status(_httpStatusService.status.OK)
        .json(resObj.list('book',result))
    } catch (error) {
        return res.status(_httpStatusService.status.serverError)
        .json(resObj.error(error))
    }
   }


   async deleteBook(req:Request, res:Response){
      try {
          const _id = req.params.id;
         console.log( {_id});
         
          await super.deleteBookOne({_id})
          return res.status(_httpStatusService.status.OK)
          .json(resObj.deleteObj())
      } catch (error) {
        return res.status(_httpStatusService.status.serverError)
        .json(resObj.error(error))
      }
   }

   


}


export const BookController = new Book()