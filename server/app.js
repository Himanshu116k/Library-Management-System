import express, { urlencoded } from 'express';
const app = express();
import cors from "cors"
import cookieParser from 'cookie-parser';
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:["GET",'PUT','POST','DELETE'],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
import Book from "./routes/bookRoute.js"
app.use("/books", Book);


export  {app};