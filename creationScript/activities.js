require('dotenv').config()

require('../config/database')

const Activity = require('../models/Activity')

Activity.create(
    {
        "name":"Activity 1",
        "photo":"   photo 1",
        "itinerary": "6317538e73523dd1d7a0168e"
    },
    {
        "name":"Activity 2",
        "photo":"photo 2",
        "itinerary": "6317538e73523dd1d7a0168f"
    }
)
