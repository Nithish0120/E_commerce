const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors=require('cors');

// Initialize Express app
 const app = express();

// Middlewares

//Form data middleware
app.use(bodyParser.urlencoded({
    extended:false
}));
// JSON body middleware
app.use(bodyParser.json());
// CORS body middleware
app.use(cors());

// Setting up the Static Directory
app.use(express.static(path.join(__dirname,'public')));