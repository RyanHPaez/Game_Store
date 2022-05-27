const express = require('express');
const router = express.Router();
const Game = require('../models/gameSchema');

//Find all games
router.get('/games', async (req, res) => {
  Game.find({}, (err, result) => {
      if(err){
          res.send(err)
      }
      res.send(result)
  })
})

//Find by name
// router.get('/:name', async (req,res) => {
//   console.log('Hit the route')
//   try{
//     const foundGame = await Game.find({
//       title: req.params.name
//     })
//     console.log('database: ', foundGame.json())
//     res.status(200).json(foundGame)
//   }catch(err){
//     res.status(500).json(err);
//   }
// })

module.exports = router;