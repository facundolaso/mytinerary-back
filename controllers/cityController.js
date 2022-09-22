const City = require('../models/City')
const Joi = require('joi')

const cityValidator = Joi.object({
        "city": Joi.string().min(4).max(20).message('INVALID_STRING'),
        "country": Joi.string().min(4).max(20).message('INVALID_STRING'),
        "photo": Joi.string().uri().message('INVALID_URL'),
        "population": Joi.number().integer().min(1000).max(100000000).message('INVALID_NUMBER'),
        "fundation": Joi.date(),
        "latitude": Joi.number().min(1).message('INVALID_NUMBER'),
        "longitude": Joi.number().min(1).message('INVALID_NUMBER'),
})

const cityController = {
    readAll: async (req, res) => {

        let query = {}
        let filterCity

        if (req.query.city) {
            query.city = req.query.city
        }

        try {
            let cities = await City.find(query)
            filterCity = await City.find({city: {$regex : "^" + query.city}}).exec()

            if (filterCity.length > 0) {    
                res.status(200).json({
                    response:  filterCity ,
                    success: true,
                })

            } else {
                res.status(200).json({
                    response:  cities ,
                    success: true,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },
    readOne: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id: id })
            if (city) {
                res.status(200).json({
                    response: city,
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    },
    create: async (req, res) => {

        try {
            await cityValidator.validateAsync(req.body)

            const newCity = await new City(req.body).save()
            res.status(201).json({
                response: newCity.id,
                message: "successfully created city!!",
                success: true,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            })
        }
    },
    deleteOne: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOneAndRemove({ _id: id })
            if (city) {
                res.status(200).json({
                    message: "city ​​successfully removed!!",
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    },
    updateOne: async (req, res) => {
        const { id } = req.params
        const updatedCity = req.body
        try {
            let city = await City.findOneAndUpdate({ _id: id }, updatedCity,{ new: true })

            if (city) {
                res.status(200).json({
                    response: city,
                    message: "successfully updated city!!",
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                })
            }

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    }
}
module.exports = cityController