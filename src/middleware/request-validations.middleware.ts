
import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { _httpStatusService } from '../utlis/_httpStatus';
export const validRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log({ errors });
            return res.status(_httpStatusService.status.UnprocessableEntity)
                .json({ status:_httpStatusService.status.UnprocessableEntity,message: "Invalid Fields",errors: errors.array({ onlyFirstError: true }) })
        }
        else {
            next();
        }
    } catch (error) {
        return res.status(_httpStatusService.status.serverError
        ).json({ error: error.message });
    }
}