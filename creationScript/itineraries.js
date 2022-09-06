require('dotenv').config()

require('../config/database')

const Itinerary = require('../models/Itinerary')

Itinerary.create(
    {
        "name": "Museum Trip",
        "user": "63164a517bfd9487c2451607",
        "city": "631648d218dca7921749d119",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Museum Trip",
        "user": "63164a517bfd9487c2451606",
        "city": "631648d218dca7921749d11a",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Museum Trip",
        "user": "63164a517bfd9487c2451605",
        "city": "631648d218dca7921749d11b",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "City Trip",
        "user": "63164a517bfd9487c2451605",
        "city": "631648d218dca7921749d11c",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "BigBen Tour",
        "user": "63164a517bfd9487c2451607",
        "city": "631648d218dca7921749d11c",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Monte Fuji Tour",
        "user": "63164a517bfd9487c2451606",
        "city": "631648d218dca7921749d118",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Nagasaki Tour",
        "user": "63164a517bfd9487c2451605",
        "city": "631648d218dca7921749d118",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "Center Tour",
        "user": "63164a517bfd9487c2451605",
        "city": "631648d218dca7921749d11f",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },
    {
        "name": "StripClub",
        "user": "63164a517bfd9487c2451606",
        "city": "631648d218dca7921749d11f",
        "price": 150,
        "likes": ["cualquiera"],
        "tags": ["cualquiera"],
        "duration": 20,
    },

)