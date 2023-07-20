import dotenv from "dotenv";
import { oauth } from './routes/oauth';
import express, { Express, Request, Response } from "express";
import { createUser, getSquareCatalog, getSquareCredentials } from "./models/mongo";
export const routes = express.Router();


routes.use('/oauth', oauth);

routes.post('/status', async function(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(req.session);
    return res.json({session: req.session});
});

routes.get('/menu', async function(req: Request, res: Response) {
    const { access_token } = req.query;
    const creds = await getSquareCredentials(access_token as string);
    console.log(creds);
    if (!creds) {
        return res.json({ error: true, message: "No credentials found."});
    }
    const result = await getSquareCatalog(creds.merchant_id as string);
    console.log(result);
    if (!result) {
        return res.json({ error: true, message: "No catalog found."});
    }
    return res.json(result.catalog.objects);
});