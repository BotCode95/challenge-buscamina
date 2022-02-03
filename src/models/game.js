const {Schema, model} = require('mongoose')

const GameSchema = Schema({
    playerName : {
        type: String,
        required: true
        // default: 'Anonymous'
    },
    points : {
        type: Number,
        default : 0
    },
})

GameSchema.methods.toJSON = function(){
    const {__v, _id, ...game} = this.toObject();
    game.uid = _id;

    return game;
}

module.exports = model('Game', GameSchema);