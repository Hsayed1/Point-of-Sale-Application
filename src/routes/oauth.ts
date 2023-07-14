import dotenv from "dotenv";
import express, {NextFunction, Request, Response} from 'express';
import { obtainSquareToken } from "../models/square";

export const oauth = express.Router();

interface SquareOAuthResponse {
    code: string,
    state: string
}




oauth.get('/square', function (req: Request, res: Response, next: NextFunction) {
    console.log("v1")
    console.log(req.query);
    const code: any = req.query.code
    if (req.query.code) {
        obtainSquareToken(code)
        res.redirect('/dashboard')
    }
});
