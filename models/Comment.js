const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    comment:{type: String, required: true},
    user:{type: String},
    itinerary:{type: String}
})

const Comment = mongoose.model(
    'comments',
    schema
)

module.exports = Comment