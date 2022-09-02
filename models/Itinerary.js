const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type: String, required: true},
    user:{type: String},
    city:{type: String},
    price:{type: Number, required: true},
    likes:{type: Array, required: true},
    tags:{type: Array, required: true},
    duration:{type: Number, required: true}
})

const Itinerary = mongoose.model(
    'itineraries',
    schema
)

module.exports = Itinerary