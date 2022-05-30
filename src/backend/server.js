require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');



require("dotenv").config(); 

// Connect to mongodb
 mongoose.connect('mongodb://localhost:27017/GameApp', ()=> console.log('db connected'), { useNewUrlParser: true,useUnifiedTopology: true}
 );


app.get('*', (req, res) =>{
    res.send('<h1> 404 Page</h1>')
})

//Middleware(order is important!)
app.use(express.json()); 

//-------------Find out if we need middleware below------------------
app.use(cors())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const gameController = require('./controllers/gameController');
app.use('/app', gameController);


//Local host port in server needs to be different from front end.
app.listen(3000, () => console.log("Server is running"));

