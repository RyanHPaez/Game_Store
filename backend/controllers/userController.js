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

//Find user by id
// router.get('/user', async (req,res) => {
//     try{
//         const foundUser = await User.findById('6293baa909f515f3d55c9c5b');
//         console.log('users', foundUser);
//         res.status(200).json(foundUser);
//     }catch(err){
//         res.status(500).json(err);
//     }
// })

//Create User
router.post('/newUser', async (req,res) => {
   console.log('req.body for user: ', req.body)
    try{
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            pref_genre: req.body.pref_genre,
            pref_system: req.body.pref_system
        })
        res.status(200).json('successfully created user');
    }catch(err){
        res.status(500).json(err);
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
module.exports = router;
