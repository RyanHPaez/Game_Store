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


// router.get('/:id', async (req, res) => {
//   try{
//     Game.find()
//     .then ((games) =>{
//       res.render('/games/index')
//     })
//   } catch(err){
//     res.render('error404')
//   }

// })

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  Games.findById(req.params.id)
  //.populate('comments')
  .then(game => {
      console.log(place.comments)
      res.render('games/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.post('/new', async (req,res) => {
  try{
      User.create(req.body);
      res.send('Successfull');
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
