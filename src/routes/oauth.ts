import dotenv from "dotenv";
import express, {NextFunction, Request, Response} from 'express';

export const oauth = express.Router();

interface SquareOAuthResponse {
    code: string,
    state: string
}


oauth.get('/square', function (req: Request, res: Response, next: NextFunction){
    console.log("v1")
    console.log(req.params.code);
    console.log(req.query.code);
    if (req.query.code) {
        res.redirect('/dashboard')
    }
});
