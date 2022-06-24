import {_tokenDecode} from '../utlis/_helper';
export const JWT_TOKEN = async (req: any, res: any, next: any) => {
    try {
        var header: any = req.headers;
        if(!header.authorization){
            return res.status(500).json({
                status: 400,
                message: "authorization is required"
            })
        }
        else{ 
          
            await _tokenDecode(req)
            next()
        }
      

    } catch (error) {
        res.status(401).json({
            status: 401,
            message: error.message
        })
    }
}


