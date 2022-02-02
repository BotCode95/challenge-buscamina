const express =require('express')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080
    }

    listen() {
        this.port, () => {
            console.log(`escuchando en el puerto ${this.port}`)
        }
    }
}

module.exports = Server;