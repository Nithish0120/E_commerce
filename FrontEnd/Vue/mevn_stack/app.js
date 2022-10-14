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


// MongoDB config
const db= require('./config/keys').mongoURI;
mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log(`Succesfully connected  @ port ${db}`);
}).catch( err => {
    console.log(`Couldn't connect with DB ${err}`);
});

app.get('/',(req,res)=>{
    return res.send("<h1>Hello world</h1>");
});

// App listen

const PORT = 5000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Ready At ${PORT}`);
});