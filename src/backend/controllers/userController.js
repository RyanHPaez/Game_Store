const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

//Find all users
router.get('/users', async (req,res) => {
    try{
        const foundUsers = await User.find();
        console.log('users', foundUsers);
        res.status(200).json(foundUsers);
    }catch(err){
        res.status(500).json(err);
    }
})

//Find user by id
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
router.post('/new', async (req,res) => {
    try{
        User.create(req.body);
        res.send('Successfull');
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;