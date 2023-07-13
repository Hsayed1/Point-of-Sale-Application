import { MongoClient, ServerApiVersion} from "mongodb";
import dotenv from "dotenv";
import MongoStore from 'connect-mongo';
import * as crypto from "crypto";
import {hashPassword, verifyPassword} from "../utils/cryptog";

dotenv.config();
export const session_secret = crypto.randomBytes(20).toString("hex");
export const uri =
    `mongodb+srv://${process.env.MONGODB_USER_NAME}:${encodeURI(process.env.MONGODB_PASSWORD || "")}@${process.env.MONGODB_URI}/?retryWrites=true&w=majority`;

console.log(`Mongo URI ${uri}`);

const sessionStore = MongoStore.create({
    mongoUrl: uri,
    ttl: 20000,
});

export const sessionOptions = {
    secret: session_secret,
    cookie: { maxAge: 20000, httpOnly: true, signed: true },
    saveUninitialized: true,
    resave: false,
    store: sessionStore,
};

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


export async function create_client() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}


export async function getUser(username: string) {
    const test_db = client.db("test");
    return await test_db.collection('users').findOne({
        username: username
    });
}

export async function createUser(username: string, password: string) {
    const user = await getUser(username);
    if (user) return false;
    const credentials = hashPassword(password);
    const test_db = client.db("test");
    return await test_db.collection("users").insertOne({
        username,
        credentials,
    });
}

export async function validatePassword(username: string, password: string) {
    const user = await getUser(username);
    if (!user) return false;
    if (verifyPassword(password, user.credentials.salt, user.credentials.hashedPassword)) {
        return user;
    }
    return false;
}