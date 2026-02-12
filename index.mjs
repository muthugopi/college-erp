import express from 'express'
import authentication from './routes/auth.routes.mjs'
import dotenv from 'dotenv';
import { connectDB } from './config/db.mjs';
import session from 'express-session';
import passport from 'passport';

import './config/passport.mjs'

const app = express();
dotenv.config();
await connectDB();


app.use(
    session({
        secret : process.env.SECRET,
        resave : false,
        saveUninitialized : false
    })
);

app.use(passport.initialize());
app.use(passport.session());
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api/auth', authentication);

app.listen(PORT, () => console.log("Server Running On port : 3000"))
