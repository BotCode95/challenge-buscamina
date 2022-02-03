const app = require('../../app').app;
const request = require('supertest')


// afterAll(async(done) => {
//   // Closing the DB connection allows Jest to exit successfully.
//   try {
//     await mongoose.connection.close();
//     await done()
//   } catch (error) {
//     console.log(error);
//     await done()
//   }
//   // done()
// })


describe('GET /game', () => {

    test('should response with status 200',async () => { 
        const response = await request(app)
            .get('/api/game').send()
         expect(response.status).toBe(200)
    })

    test('should have a content-type: application/json', async () => {
        const response = await request(app).get('/api/game').send()
        expect(response.type).toBe('application/json')
    })

    test('when a game contains Id response with actually game', async () => {
        const response = await request(app).get('/api/game/61fae008f7b5c7bea0a93346').send()
        expect(response.body.game.playerName).toBe('Patricio Bottino')
    })
})

describe('POST /game', () => {

    test('should response with status 200',async () => {
        const response = await request(app)
            .post('/api/game').send({playerName : 'player 1'})
         expect(response.status).toBe(200)
    })

    test('should have a content-type: application/json', async () => {
        const response = await request(app).post('/api/game').send()
        expect(response.header['content-type']).toEqual(expect.stringContaining('json'))
    })

    test('should responde with playerName in body', async () => {
        const response = await request(app).post('/api/game').send({
            playerName : 'player 1'
        })
        expect(response.body.game.playerName).toBeDefined();
    })

    test('should responde with game id', async () => {
        const response = await request(app).post('/api/game').send({playerName : 'player 1'})
        expect(response.body.game.uid).toBeDefined();
    })

    test('when playerName is missing response with status 400',async () => {
        const response = await request(app)
            .post('/api/game').send()
         expect(response.status).toBe(400)
    })
})
