import {Request,Response} from 'express';
import { author } from '../interfaces/_index';
import { _infoMessaage,resObj } from '../utlis/responseMessage';
import {_httpStatusService} from '../utlis/_httpStatus';
import authorService from '../services/author.service';
import { _tokenDecode } from '../utlis/_helper';
import { DeleteResult } from 'mongodb';
import BookService from '../services/book.service';


 class Author extends authorService{
    constructor(){
        super();
    };

    async createAuthor(req:Request, res:Response){
        try {
            const payload:author = req.body;
            const userId:any = await _tokenDecode(req);
            payload['userId'] = userId._id
            const result  = await super.create(payload);
            return res.status(_httpStatusService.status.OK)
            .json(resObj.create('book',result))

        } catch (error) {
            return res.status(_httpStatusService.status.serverError)
            .json(resObj.error(error))
        }
    }

   async authorList(req:Request, res:Response){
    try {
        const result = await super.findAllAuthor();
        return res.status(_httpStatusService.status.OK)
        .json(resObj.list('author',result))
    } catch (error) {
        return res.status(_httpStatusService.status.serverError)
        .json(resObj.error(error))
    }
   }

   async authorRelated(req:Request, res:Response){
       try {
          const _id = req.params.id;
          const result = await super.relatedBook(_id);
          return res.status(_httpStatusService.status.OK)
          .json(resObj.list('author',result))
       } catch (error) {
        return res.status(_httpStatusService.status.serverError)
        .json(resObj.error(error))
       }
   }
   async delete(req:Request, res:Response) {
       try {
             const _id = req.params.id;
             await super.deleteAuthor(_id);
             const bookService = new BookService();
             await bookService.relateddeleteBook({published:_id});
             return res.status(_httpStatusService.status.OK)
             .json(resObj.deleteObj())
       } catch (error) {
        return res.status(_httpStatusService.status.serverError)
        .json(resObj.error(error))
       }
   }
}


export const AuthorController = new Author()