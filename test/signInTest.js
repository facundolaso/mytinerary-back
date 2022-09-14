const request = require('supertest')
const app = require('../app')

describe('POST /auth/signin', function () {
    // error para cuando se ingresa un usuario que no ha verificado su email
    it('Must respond with 401 status code', function (done) {
        request(app)
            .post('/auth/signin')
            .send(
                {
                    "mail": "engel.retamal.e@gmail.com",
                    "password": "hola123",
                    "from": "form",
                }
            )
            .expect(401, done)
    })

    // test de error para cuando se ingresan credenciales invalidas 
    it('Must respond with 400 status code', function (done) {
        request(app)
            .post('/auth/signin')
            .send(
                {
                    "mail": "fake91255@gmail.com",
                    "password": "hola12345",
                    "from": "form",
                }
            )
            .expect(400, done)
    })

    // test de error para cuando se registra un usuario con una forma que ya existe dentro de la BBDD
    it('Must respond with 404 status code', function (done) {
        request(app)
            .post('/auth/signin')
            .send(
                {
                    "mail": "usuario.invalido@gmail.com",
                    "password": "hola123",
                    "from": "form",
                }
            )
            .expect(404, done)
    })

})