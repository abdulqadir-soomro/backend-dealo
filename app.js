require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config_Db_con');
const userroute=require('./routes/userRouter')

//const routes = require('./routes');


// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/', userroute);





module.exports = app;
