const express = require('express')
const router = express.Router();
const {getGame,getGameById, createGame, deleteGame} = require('../controllers/game')

router.get('/',  getGame)
router.get('/:id', getGameById)
router.post('/', createGame)
router.delete('/:id', deleteGame)

module.exports = router;