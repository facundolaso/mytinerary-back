const Comment = require('../models/Comment')

const commentController = {
    create: async (req, res) => {
        try {
            console.log(req.body)

            await new Comment(req.body).save()
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

        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            let Comments = await Comment.find(query)
                .populate('user', {name : 1, lastName:1, photo:1})
                .populate('itinerary', { name: 1 })


            res.status(200).json({
                response: Comments,
                success: true,

            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "Itinerary not found",
                success: false
            })
        }
    }
}

module.exports = commentController