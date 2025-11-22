import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.static('public'));

app.use(bodyParser.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


import { personRouter } from "./routes/person.routes.js";
app.use("/person",personRouter);

app.get('/',(req,res)=>{
    res.send('API is running....');
})
export {app};