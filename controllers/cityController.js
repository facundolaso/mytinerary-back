const City = require('../models/City')

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
            console.log(req.body)

            const newCity = await new City(req.body).save()
            res.status(201).json({
                response: newCity.id,
                success: true,
            })
        } catch (error) {
            res.status(400).json({
                message: "could't create city",
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