const { data } = require('autoprefixer');
const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

//Find all users
router.get('/users', async (req,res) => {
    console.log('Route hit')
    try{
        const foundUsers = await User.find();
        console.log('users', foundUsers);
        res.status(200).json(foundUsers);
    }catch(err){
        res.status(500).send(err);
    }
})

// Find user by id
router.get('/user', async (req,res) => {
    try{
        const foundUser = await User.findById('6293baa909f515f3d55c9c5b');
        console.log('users', foundUser);
        res.status(200).json(foundUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//Create User
router.post('/newUser', async (req,res) => {
   console.log('req.body for user: ', req.body)
        try{
            User.create(req.body)
            res.status(200).json('Success')
        }catch(err){
            res.status(500).send({message: err})
        }
})

//Update user info
router.put('/updateUser', async (req,res)=>{
    console.log('hit update route')
    try{

    }catch(err){
        res.send(err)
    }
})

//Delete user
router.delete('/deleteUser', async (req,res)=>{
    console.log('User: ', req.body.username)
    const user = req.body.username
    User.deleteOne({username: user}, function(err, obj) {
        if (err) throw err;
       res.status(200).send("1 document deleted");
      });
})
module.exports = router;
