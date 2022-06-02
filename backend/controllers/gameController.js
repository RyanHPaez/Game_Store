const express = require('express');
const router = express.Router();
const Game = require('../models/gameSchema');


//Find all games
router.get('/games', async (req, res) => {
  try{
    const foundGames = await Game.find();
    res.status(200).json(foundGames);
  }catch(err){
    res.status(500).json(err);
  }
})


router.get('/games/gameDetail', async(req,res) => {
  try{
    // const reviewedGame = await Game.find();
    res.status(200).send('this is the gameDetail route')
  } catch(err){
    res.status(500).json(err);
  }
})

router.get('/games/gameReview', async(req,res) => {
  try{
    
    res.status(200).render('games/index')
  } catch(err){
    res.status(500).json(err);
  }
})

router.get('*', (req, res) => {
  res.send('404 not found')
})

// router.get('/profile/mygames', (req, res) => {
//   let games = [{
//     id:0101,
//     title: 'New User',
//     price: '2',


//   }

//   ]
//   res.render('/games/index')
// })


router.post('/new', async (req,res) => {
  try{
      User.create(req.body);
      res.send('Successful');
  }catch(err){
      res.status(500).json(err);
  }
})

// router.get("/name", async (req, res) => {
//   try{
//     const foundGame = await Game.find(req.body.name)
//     res.status(200).json(foundGame);
//   }catch(err){
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

module.exports = router;
