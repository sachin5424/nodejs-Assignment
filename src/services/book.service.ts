
import moment from 'moment';
import mongoose from 'mongoose';
import {book} from '../interfaces/_index';
import {bookModel} from '../model/_index'
import { aggregate } from '../utlis/_helper';
export default class BookService {
    constructor(){};

    async create(payload:book):Promise<book>{
        try {
            return await bookModel.create(payload)
        } catch (error) {
            throw error;
        }
    }
    async findOne(payload:Object):Promise<book>{
        try {
            return await bookModel.findOne(payload)
        } catch (error) {
            throw error;
        }
    }
    async findAllBook(){
        try {

            return await aggregate(bookModel,[
                {
                    $lookup:{
                      from: 'authors',
                      localField:'published',
                      foreignField: '_id',
                      as: 'author',
                    },
                },
                {$unwind:"$author"},
                {
                    $addFields:{
                        "author_name":"$author.name",
                        "userId":"$author.userId",
                      
                 }
                },
               
                {
                    $project:{
                        'author':0,
                       
                        
                    }
                }
            ])
        } catch (error) {
            throw error;
        }
    }
    async relateddeleteBook(payload:any){
        try {
            return await bookModel.deleteMany(payload)
        } catch (error) {
            throw error;
        }
    }
    async deleteBookOne(payload:any){
        try {
            return await bookModel.deleteOne(payload)
        } catch (error) {
            throw error;
        }
    }
}

