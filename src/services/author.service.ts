
import mongoose from 'mongoose';
import {author} from '../interfaces/_index';
import {authorModel} from '../model/_index'
import { aggregate } from '../utlis/_helper';
export default class authorService {
    constructor(){};

    async create(payload:author):Promise<author>{
        try {
            return await authorModel.create(payload)
        } catch (error) {
            throw error;
        }
    }
    async findOne(payload:Object):Promise<author>{
        try {
            return await authorModel.findOne(payload)
        } catch (error) {
            throw error;
        }
    }
    async findAllAuthor(){
        try {
            return await authorModel.find().sort({createdAt:-1}); 
        } catch (error) {
            throw error;
        }
    }

    async relatedBook(id:string){
        try {
            return await aggregate(authorModel,[
                {
                    $match:{_id:new mongoose.Types.ObjectId(id)}
                },
                {
                    $lookup:{
                      from: 'books',
                      localField:'_id',
                      foreignField: 'published',
                      as: 'books',
                    },
                },
            ])
        } catch (error) {
            throw error;
        }
    }
    async deleteAuthor(id:string){
        try {
            return await authorModel.deleteOne({_id:id})
        } catch (error) {
            throw error;
        }
    }
}

