import express, { Application as ExApplication, Handler, } from 'express';
import { JWT_TOKEN } from './middleware/jwt-token.middleware';
import {BookRoutes} from './routes/routes'
// AdminJs.registerAdapter(AdminjsMongo);
import cors from 'cors'



class Application {

  private readonly _instance: ExApplication;
  get instance(): ExApplication {
    return this._instance;
  }

  adminJsOptions = {};
  constructor() {
    this._instance = express();
    this._instance.use(cors());
    this._instance.use(express.json());
    this._instance.use('/api/private',JWT_TOKEN)
    this._instance.use('/api/',BookRoutes)

    // this._instance.use(adminJs.options.rootPath,adminJsRoutes)
    
  }

}
export default new Application()