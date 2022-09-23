const request = require('supertest')
const app = require('../app')

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjNmZDIzZGQ5YTY5YjJkYmM0NDMxMiIsImlhdCI6MTY2Mzc5MDA0NiwiZXhwIjoxNjYzODc2NDQ2fQ.eX1DHAYzbh5n1HapFIcyeVaFcoP301wUzrmeGakAP5g'

describe('POST /comments', function () {
    // test para la creación de comentarios
    it('Must respond with 201 status code', function (done) {
        request(app)
            .post('/comments')
            .send(
                {                
                "comment": "prueba 500",
                "user":"6323fd23dd9a69b2dbc44312",
                "itinerary": "63240e282749ce29006fa637",
                }
            )
            .set('Authorization', `Bearer ${token}`)
            .expect(201, done)
    })

})
describe('PATCH /comments', function () {
        // test para modificación de comentario
        it('Must respond with 200 status code', function (done) {
            request(app)
                .patch('/comments/?id=632b6c0ac7a360f59b3ea48f')
                .send(
                    {
                        "comment": "comentario modificado con test XD!",
                    }
                )
                .set('Authorization', `Bearer ${token}`)
                .expect(200, done)
        })
    })
describe('GET /comments', function () {
        // test para obtener todos los comentarios
        it('Must respond with 200 status code', function (done) {
            request(app)
                .get('/comments')
                .expect(200, done)
        })
    })