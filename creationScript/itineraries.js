require('dotenv').config()

require('../config/database')

const Itinerary = require('../models/Itinerary')

Itinerary.create(
    {
        "name": "Museum Trip",
        "user": "Facundo",
        "city": "Manhattan",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Museum Trip",
        "user": "Engelberth",
        "city": "Hong Kong",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Museum Trip",
        "user": "Joaquin",
        "city": "Rio de Janeiro",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "City Trip",
        "user": "Joaquin",
        "city": "London",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "BigBen Tour",
        "user": "Facundo",
        "city": "London",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Monte Fuji Tour",
        "user": "Engelberth",
        "city": "Japan",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Nagasaki Tour",
        "user": "Joaquin",
        "city": "Japan",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Center Tour",
        "user": "Joaquin",
        "city": "Singapore",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "StripClub",
        "user": "Engelberth",
        "city": "Singapore",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },

)