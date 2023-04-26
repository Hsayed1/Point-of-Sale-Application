import dotenv from "dotenv";
import express, {NextFunction, Request, Response} from "express";
export const oauth = express.Router();

interface SquareOAuthResponse {
    code: string,
    state: string
}


oauth.get('/square', function (req: Request, res: Response, next: NextFunction){
    console.log("v1")
    console.log(req.body);
    if (req.params.code) {
        res.json({ success: true, code: req.params.code })
    }
});
