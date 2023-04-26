import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
export const oauth = express.Router();

interface SquareOAuthResponse {
    code: string,
    state: string
}


oauth.get('/square', function (req, res, next){
    console.log("v1")
    console.log(req.body);
    return {success: true};
});
