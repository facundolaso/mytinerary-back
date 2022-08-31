require('dotenv').config()

require('./config/database')

const City = require('./models/City')

    City.create({
        city: "Barcelona",
        country: "España",
        photo: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 1620000000,
        fundation: "2022"
    },
    {
        city: "Tokio",
        country: "Japan",
        photo: "https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: "14000000",
        fundation: "1457",
    },
    {
        city: "Manhattan",
        country: "EE.UU",
        photo: "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 1629000000,
        fundation: "1624",
    },
    {
        city: "Hong Kong",
        country: "China",
        photo: "https://images.pexels.com/photos/2300342/pexels-photo-2300342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 7482000000,
        fundation: "1841",
    },
    {
        city: "Rio de Janeiro",
        country: "Brazil",
        photo: "https://images.pexels.com/photos/11051184/pexels-photo-11051184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 16460000000,
        fundation: "1565",
    },
    {
        city: "London",
        country: "United Kingdom",
        photo: "https://images.pexels.com/photos/1581693/pexels-photo-1581693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 8982000000,
        fundation: "47",
    },
    {
        city: "Miami",
        country: "EE.UU",
        photo: "https://images.pexels.com/photos/1581693/pexels-photo-1581693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 461080,
        fundation: "1896 ",
    },
    {
        city: "Rome",
        country: "Italy",
        photo: "https://images.pexels.com/photos/2676642/pexels-photo-2676642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 2873000000,
        fundation: "753",
    },
    {
        city: "Singapore",
        country: "Singapore",
        photo: "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 5686000000,
        fundation: "1965",
    },
    {
        city: "Venice",
        country: "Italy",
        photo: "https://images.pexels.com/photos/164212/pexels-photo-164212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 261905,
        fundation: "697",
    },
    {
        city: "Sidney",
        country: "Australia",
        photo: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 5312000000,
        fundation: "1788",
    },
    {
        city: "Dubai",
        country: "Arab Emirates",
        photo: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        population: 3331000000,
        fundation: "1833",
    },
    )
