const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser')
require("dotenv").config(); 

// Connect to mongodb
mongoose.connect('mongodb+srv://MSProject:gameshopappajr@cluster0.nff4h.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true}, ()=> console.log('db connected')
);

//Middleware(order is important!)
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
// app.use(express.json({strict: false}));
//-------------Find out if we need middleware below------------------
app.use(cors())

const gameController = require('./controllers/gameController');
app.use('/app', gameController);
const userController = require('./controllers/userController');
app.use('/signup', userController);

  

//Local host port in server needs to be different from front end.
app.listen(3005, () => console.log("Server is running"));