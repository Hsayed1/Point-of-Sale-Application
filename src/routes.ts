import dotenv from "dotenv";
import { oauth } from './routes/oauth';
import express, { Express, Request, Response } from "express";
import { 
    createUser, 
    getSquareCatalog, 
    getSquareCredentials, 
    getOrders,
    getCompletedOrders,
    putOrder, 
    completeOrder 
} from "./models/mongo";
import UUID from "crypto";
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

// Endpoint to get all orders that are not complete
routes.get('/orders', async function(req: Request, res: Response) {
    const { access_token } = req.query;
    const creds = await getSquareCredentials(access_token as string);
    console.log(creds);
    if (!creds) {
        return res.json({ error: true, message: "No credentials found."});
    }
    const result = await getOrders(creds.merchant_id as string);
    console.log(result);
    if (!result) {
        return res.json({ error: true, message: "No catalog found."});
    }
    return res.json(result);
});

// Endpoint to get all orders that are complete
routes.get('/orders/completed', async function(req: Request, res: Response) {
    const { access_token } = req.query;
    const creds = await getSquareCredentials(access_token as string);
    console.log(creds);
    if (!creds) {
        return res.json({ error: true, message: "No credentials found."});
    }
    const result = await getCompletedOrders(creds.merchant_id as string);
    console.log(result);
    if (!result) {
        return res.json({ error: true, message: "No catalog found."});
    }
    return res.json(result);
});


// Endpoint to create a new order
routes.post('/orders', async function(req: Request, res: Response) {
    console.log('/orders POST');
    const { access_token } = req.query;
    const creds = await getSquareCredentials(access_token as string);
    if (!creds) {
        return res.json({ error: true, message: "No credentials found."});
    }
    const order: any = { items: req.body };
    order.merchant_id = creds.merchant_id;
    order.timeCreated = new Date();
    order.order_id = UUID.randomUUID().toString();
    order.completed = false;
    console.log("order:");
    console.log(order);
    const result = await putOrder(order);
    console.log(result);
    if (!result) {
        return res.json({ error: true, message: "No catalog found."});
    }
    return res.json(result);
});

// Endpoint to mark an order as complete
routes.post('/orders/:order_id', async function(req: Request, res: Response) {
    const { access_token } = req.query;
    const { order_id } = req.params;
    const creds = await getSquareCredentials(access_token as string);
    console.log(creds);
    if (!creds) {
        return res.json({ error: true, message: "No credentials found."});
    }
    const result = await completeOrder(creds.merchant_id as string, order_id);
    console.log(result);
    if (!result) {
        return res.json({ error: true, message: "No catalog found."});
    }
    return res.json(result);
});
