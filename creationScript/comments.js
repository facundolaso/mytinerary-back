require('dotenv').config()

require('../config/database')

const Comment = require('../models/Comment')

Comment.create(
    {
        "comment": "Activity 1",
        "user": "63164a517bfd9487c2451605",
        "itinerary": "6317538e73523dd1d7a0168e"
    },
    {
        "comment": "Activity 2",
        "user": "63164a517bfd9487c2451607",
        "itinerary": "6317538e73523dd1d7a0168f"
    }
)
