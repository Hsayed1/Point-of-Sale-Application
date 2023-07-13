import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import session from 'express-session';
import path from "path";
import cors from "cors";
import { routes } from './src/routes';
import {
    client,
    sessionOptions,
    createUser,
    validatePassword
} from "./src/models/mongo";

dotenv.config();

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
    email: { [key: string]: any };
  }
}

const app: Express = express();
client.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use(session(sessionOptions));

app.use('/v1', routes);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    console.log('Using client build directory');
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('/*', function (req: Request, res: Response) {
        console.log('Returning index.html')
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
interface FormInputs {
    email: string,
    password: string
  }

  // Array of example users for testing purposes
  const users = [
    {
      id: 1,
      name: 'Maria Doe',
      email: 'maria@example.com',
      password: 'maria123'
    },
    {
      id: 2,
      name: 'Juan Doe',
      email: 'juan@example.com',
      password: 'juan123'
    }
  ];


app.post('/signup', async function(req: Request, res: Response) {
   const { email, password } = req.body;
   console.log(`${req.body.email}: ${req.body.password}`);
   if (email && password) {
       const result = await createUser(email, password);
       if (!result) {
           return res.json({ error: true, message: "User already exists."});
       }
       return res.json({ result })
   }
   console.log("Bad email or password");
   res.sendStatus(500);
});

  // route login
app.post('/login', async function(req: Request, res: Response) {
    console.log(req.body);
    const { email, password }:FormInputs = req.body;
    const result = await validatePassword(email, password);

    if (!result) {
        return res.status(404).send('User Not Found!')
    }

    req.session.email = email;
    req.session.save( (err: Error) => {
        if (err) return console.error(err);
    });

    return res.status(200).json(result);
});


  app.get("/logout", async (req: Request, res: Response) => {
     req.session.destroy((err: Error) => {
         if (err) return console.error(err);
     });
     return res.clearCookie("connect.sid").send("Logout complete")
  });

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});