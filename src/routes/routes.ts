import {Router} from 'express';
import {BookController,AuthorController,UserController} from '../controller/_index';
import {validations} from '../validations/_index';
import {validRequest} from '../middleware/request-validations.middleware'

const router:Router = Router();


// all books routes 
export  const BookRoutes = [
   router.post('/private/author',validations.createAuthor,validRequest,AuthorController.createAuthor),
   
   router.get('/private/author',AuthorController.authorList),
   router.get('/private/book',BookController.bookList), // book list 
   router.get('/private/author/:id',AuthorController.authorRelated),
   router.delete('/private/author/:id',AuthorController.delete),
   router.post('/private/book',validations.createBook,validRequest,BookController.createBook) // create book 
   ,
   router.delete('/private/book/:id',BookController.deleteBook),
   router.post('/auth/register',validations.createUser,validRequest,UserController.createUser),
   router.post('/auth/login',validations.loginUser,validRequest,UserController.userlogin)
]

//deleteBook

// end all books routes