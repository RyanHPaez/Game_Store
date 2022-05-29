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

router.get("/name", async (req, res) => {
  try{
    const foundGame = await Game.find(req.params.id)
    res.status(200).json(foundGame);
  }catch(err){
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
