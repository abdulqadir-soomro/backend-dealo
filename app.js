require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config_Db_con');

//const routes = require('./routes');


// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes


// DB Connect


module.exports = app;
