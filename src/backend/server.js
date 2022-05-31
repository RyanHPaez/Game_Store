const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser')
require("dotenv").config(); 

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/GameApp', ()=> console.log('db connected'), { useNewUrlParser: true,useUnifiedTopology: true}
);

//Middleware(order is important!)
app.use(express.json()); 
app.use(bodyParser.json())
//-------------Find out if we need middleware below------------------
app.use(cors())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



const gameController = require('./controllers/gameController');
app.use('/app', gameController);
const userController = require('./controllers/userController');
app.use('/signup', userController);

//Local host port in server needs to be different from front end.
app.listen(3001, () => console.log("Server is running"));