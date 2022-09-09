const request = require('supertest')
const app = require('../app')

describe('POST /cities', function () {
    // test para la correcta creacion de una ciudad
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/cities')
            .send(
                {
                    "city": "Manhattan",
                    "country": "EE.UU",
                    "photo": "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "population": 16290000,
                    "fundation": "1624-01-01T00:00:00.000Z",
                }
            )
            .expect(201, done)
    })

    // test para cuando el valor de 'population' es mayor al limite aceptado
    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/cities')
            .send(
                {
                    "city": "Manhattan",
                    "country": "EE.UU",
                    "photo": "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "population": 1629000000000,
                    "fundation": "1624-01-01T00:00:00.000Z",
                }
            )
            .expect(400, done)
    })
})

describe('PATCH /cities', function () {
    // test PARA CORRECTO FUNCIONAMIENTO DE EDITAR UNA CIUDAD
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/cities/631974dcf9d608ff08301fac')
            .send(
                {
                    "city": "EDITADA TEST",
                    "country": "EE.UU",
                    "photo": "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "population": 16290000,
                    "fundation": "1624-01-01T00:00:00.000Z",
                }
            )
            .expect(200, done)
    })
})