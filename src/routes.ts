import dotenv from "dotenv";
import { oauth } from './routes/oauth';
import express, { Express, Request, Response } from "express";
import {createUser} from "./models/mongo";
export const routes = express.Router();


routes.use('/oauth', oauth);

routes.post('/status', async function(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(req.session);
    return res.json({session: req.session});
});
