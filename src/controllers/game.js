const Game = require('../models/game');


const getGame = async (req,res) => {
    try {
        game = new Game()
        await game.save();
        res.json({
            msg: 'New Game',
            game
        });
    } catch (error) {
    
    res.status(400).json({ msg: error})
    }
}
const getGameById = async (req,res) => {
    const {id} = req.params;
    try {
        
        var message = 'Continue Game'
        const game = await Game.findById(id)
        res.json({
            msg: message,
            game
        });

    } catch (error) {
        
        res.status(400).json({ msg: error})
    }
}

const createGame = async (req,res) => {
    const {playerName, points} = req.body;
    try {
        const game = new Game({playerName, points})

        await game.save();

        res.json({
            msg: 'New Game Init',
            game
        });
    } catch (error) {
        
        res.status(400).json({ msg: error})
    }
}

const deleteGame = async (req,res) => {
    const {id} = req.params;
    try {
        const game = await Game.findByIdAndDelete(id)
        res.json({msg: 'Game Deleted'});
    } catch (error) {
        res.status(400).json({ msg: error})
    }
}

module.exports = {
    getGame,
    getGameById,
    createGame,
    deleteGame
}