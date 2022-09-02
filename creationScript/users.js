require('dotenv').config()

require('../config/database')

const User = require('../models/User')


User.create(
    {
        "name": "Joaquin",
        "lastName": "Polla",
        "mail": "sadasda@asdasd.com",
        "password": "hola123",
        "photo": "dsfsdfdsffdsf",
        "country" : "Albania"
    },
    {
        "name": "Engelberth",
        "lastName": "Retamal",
        "mail": "asdasd@asdasd.com",
        "password": "asdas1234",
        "photo": "asdas2342asdas",
        "country" : "Chile"
    },
    {
        "name": "Facundo",
        "lastName": "Laso",
        "mail": "sadasdasd@asdasd.com",
        "password": "asdasd2321",
        "photo": "asdasd434",
        "country" : "Argentina"
    }
)

