require('dotenv').config()

require('./config/database')

const City = require('./models/City')

for (let i = 0; i < 12; i++){
    City.create({
        city: "Barcelona",
        country: "España",
        photo: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 1620000000,
        fundation: "2022",
    })
}