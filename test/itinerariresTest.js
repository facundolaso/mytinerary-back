const request = require('supertest')
const app = require('../app')

describe('POST /itineraries', function () {
    // test para la correcta creacion de un itinerario
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send(
                {
                    "name": "Museum Trip",
                    "user": "63164a517bfd9487c2451607",
                    "city": "631648d218dca7921749d119",
                    "price": 150,
                    "likes": ["cualquiera"],
                    "tags": ["cualquiera"],
                    "duration": 20,
                }
            )
            .expect(201, done)
    })

    // test para cuando falta un campo que es requerido
    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/itineraries')
            .send(
                {
                    "name": "Museum Trip",
                    "user": "63164a517bfd9487c2451607",
                    "city": "631648d218dca7921749d119",
                    "likes": ["cualquiera"],
                    "tags": ["cualquiera"],
                    "duration": 20,
                }
            )
            .expect(400, done)
    })
})

describe('PATCH /itineraries', function () {
    // test para el correcto funcionamiento de editar un itinerario
    it('Must respond with 200 status code', function (done) {
        request(app)
            .patch('/itineraries/631972df7f3559846697711b')
            .send(
                {
                    "name": "Museum Trip",
                    "user": "63164a517bfd9487c2451607",
                    "city": "631648d218dca7921749d119",
                    "price": 150,
                    "likes": ["cualquiera"],
                    "tags": ["cualquiera"],
                    "duration": 25,
                }
            )
            .expect(200, done)
    })
})