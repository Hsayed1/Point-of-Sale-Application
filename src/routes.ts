import dotenv from "dotenv";
import { oauth } from './routes/oauth';
import express, { Express, Request, Response } from "express";
export const routes = express.Router();


routes.use('/oauth', oauth);

