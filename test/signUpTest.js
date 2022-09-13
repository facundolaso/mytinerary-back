const request = require('supertest')
const app = require('../app')

describe('POST /auth/signup', function () {
    // test para la correcta creacion de un usuario
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/auth/signup')
            .send(
                {
                    "name": "Abuela",
                    "lastName": "Laso",
                    "mail": "adwawd54a56d6521@gmail.com",
                    "password": "google1234",
                    "photo": "cucaracha",
                    "country" : "paises bajos",
                    "from": "google",
                    "role":"user"
                }
            )
            .expect(201, done)
    })

    // test para la correcta creacion de el mismo usuario pero con otro 'From' y contraseña
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/auth/signup')
            .send(
                {
                    "name": "Abuela",
                    "lastName": "Laso",
                    "mail": "adwawd54a56d6521@gmail.com",
                    "password": "hola123",
                    "photo": "cucaracha",
                    "country" : "paises bajos",
                    "from": "form",
                    "role":"user"
                }
            )
            .expect(201, done)
    })

    //test para que de error cuando el usuario ya esté registrado con ese email y el 'From' ya exista
    it('Must respond with 200 status code', function (done) {
        request(app)
            .post('/auth/signup')
            .send(
                {
                    "name": "Abuela",
                    "lastName": "Laso",
                    "mail": "adwawd54a56d6521@gmail.com",
                    "password": "hola123",
                    "photo": "cucaracha",
                    "country" : "paises bajos",
                    "from": "form",
                    "role":"user"
                }
            )
            .expect(200, done)
    })

})