const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

require("dotenv").config(); 

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/GameApp', ()=> console.log('db connected'), { useNewUrlParser: true,useUnifiedTopology: true}
);

//Middleware(order is important!)
app.use(express.json()); 

//-------------Find out if we need middleware below------------------
app.use(cors())

const gameController = require('./controllers/gameController');
app.use('/app', gameController);

//Local host port in server needs to be different from front end.
app.listen(3001, () => console.log("Server is running"));