import { check } from "express-validator";
import {_infoMessaage} from '../utlis/responseMessage';
import BookService from '../services/book.service';
import AuthorService from '../services/author.service';
import UserService from '../services/user.service';
import {book,author,user} from '../interfaces/_index';
import { passwordDecode } from "../utlis/_helper";

const bookService = new BookService();

const authorService = new AuthorService();
const userService = new UserService()
const  createBook  = [
   check('name').notEmpty().withMessage(_infoMessaage.required).isLength({min:3})
   .isString(),
   check('published').notEmpty().withMessage(_infoMessaage.required).custom(async(value)=>{
      return authorService.findOne({_id:value}).then((author:author)=>{
         if(!author) throw new Error(_infoMessaage.invalidId('published'))
      }).catch((error)=>{
         throw new Error(_infoMessaage.invalidId('published'))
      })
   })
   .isString(),
   check('price').notEmpty().withMessage(_infoMessaage.required).isNumeric(),
];

const createAuthor = [

   check('name').notEmpty().withMessage(_infoMessaage.required).isLength({min:3})
   .isString().custom(async (value:string)=>{
      return authorService.findOne({name:value}).then((data:author)=>{
       if(data) throw new Error(_infoMessaage.unique(value))
      })
   }),
   check('age').notEmpty().withMessage(_infoMessaage.required).isNumeric(),
   check('dateOfBirth').notEmpty().withMessage(_infoMessaage.required)
   .isDate(),
]

const createUser = [
   check('email').notEmpty().withMessage(_infoMessaage.required)
   .isEmail().custom(async (value:string)=>{
      return userService.findOne({email:value}).then((data:user)=>{
       if(data) throw new Error(_infoMessaage.unique(value))
      })
   }),
   check('password').notEmpty().withMessage(_infoMessaage.required).isString()
   // .isLength({ min: 6 }).isLowercase().withMessage('Password length must be 6 characters')
   .not()
   .isLowercase().withMessage(_infoMessaage.uppercase)
   .not()
   .isUppercase().withMessage(_infoMessaage.lowercase)
   .not()
   .isNumeric().withMessage(_infoMessaage.number)
   .not()
   .isAlpha().withMessage(_infoMessaage.alphanumeric),
   check('confirmPassword').notEmpty().withMessage(_infoMessaage.required).custom(async(value:any,{req})=>{
      if(value !== req.body.password){
          throw new Error(_infoMessaage.confirmPassword)
      }
  })
]


const loginUser = [
   check('email').notEmpty().withMessage(_infoMessaage.required)
   .isEmail().custom(async (value:string)=>{
      console.log({value});
      
      return userService.findOne({email:value}).then((data:user)=>{
       if(!data) throw new Error(_infoMessaage.emailNotRegex(value))
      })
   }),

   check('password').notEmpty().withMessage(_infoMessaage.required).custom(async(value:string,{req})=>{
    
      
      return  passwordDecode({email:req.body.email,password:value}).then((data:Boolean)=>{
         if(data===false){
            throw Error(_infoMessaage.passwordMatch)
         }
      })
   })

]

export const validations = {
   createBook,createAuthor,createUser,loginUser
}