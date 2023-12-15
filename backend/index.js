import mongoose from "mongoose";
import cors from 'cors';
import express from 'express';
import bodyParser from "body-parser";
import productsdata from './Routes/Productsdata.js';
import login from './Routes/loginmodeldata.js';

const app=express();
const url="mongodb+srv://aatifshah:159@cluster0.azhn9rj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url)
.then(()=>console.log("connected to db"));


app.listen(5000);
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/Forms/Addform",productsdata);
app.use("/Forms/ViewForm",productsdata);
app.use("/Registrationform",login);
app.use("/Forms/loginRecords",login);
app.use('/', productsdata);
app.use('/Images',express.static('Images'));
app.use('/Login', login);
app.use('/Update', login);