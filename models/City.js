const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city:{type: String, required: true},
    country:{type: String, required: true},
    photo:{type: String, required: true},
    population:{type: Number, required: true, min:1000, max:100000000},
    fundation:{type: Date, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},

})

const City = mongoose.model(
    'cities',
    schema
)

module.exports = City