import express from 'express'
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';

import authentication from './routes/auth.routes.mjs';
import classroutes from "./routes/classes.routes.mjs";
import usersroutes from "./routes/users.routes.mjs"
import { connectDB } from './config/db.mjs';

import './config/passport.mjs';

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
app.use('/api/class', classroutes);
app.use('/api/users', usersroutes);

//for unknow api router

app.use((req, res)=> {
    return res.status(404).json({
        message : "API Route Not Found"
    })
})

app.listen(PORT, () => console.log("Server Running On port : 3000"))
