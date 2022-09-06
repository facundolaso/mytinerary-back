const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async (req, res) => {
        try {
            console.log(req.body)

            await new Itinerary(req.body).save()
            res.status(201).json({
                success: true,
            })
        } catch (error) {
            res.status(400).json({
                message: "could't create itinerary",
                success: false,
            })
        }
    },
    readAll: async (req, res) => {

        let query = {}

        if (req.query.city) {
            query.city = req.query.city
        }

        if (req.query.user) {
            query.user = req.query.user
        }

        try {
            let itineraries = await Itinerary.find(query)
                .populate('user', { name: 1 })
                .populate('city', { city: 1 })

            res.status(200).json({
                response: itineraries,
                success: true,

            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "Itinerary not found",
                success: false
            })
        }
    },
    updateOne: async (req, res) => {
        const { id } = req.params
        const updatedItinerary = req.body
        try {
            let itinerary = await Itinerary.findOneAndUpdate({ _id: id }, updatedItinerary, { new: true })
            if (itinerary) {
                res.status(200).json({
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find itinerary",
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
    deleteOne: async (req, res) => {
        const { id } = req.params
        try {
            let itinerary = await Itinerary.findOneAndRemove({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find itinerary",
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
}

module.exports = itineraryController