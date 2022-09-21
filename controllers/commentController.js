const Comment = require('../models/Comment')

const commentController = {
    create: async (req, res) => {
        let {id} = req.query
        let commentId = req.user.id
        let userComment = req.body.comment
        try {
            await new Comment({comment: userComment, user: commentId, itinerary: id}).save()
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
    },
    updateComment: async (req, res) => {
        const { id } = req.query
        const commentId = req.user.id.valueOf()
        const updatedComment = req.body
        try {
            let commentCurrent = await Comment.findOne({_id : id})
            console.log(commentCurrent)
            if (commentCurrent.user.valueOf() === commentId) {
                await Comment.findOneAndUpdate({ _id: id }, updatedComment, { new: true })
                res.status(200).json({
                    message: "comment updated successfully!!",
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find comment",
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
    deleteComment: async (req, res) => {
        const { id } = req.params
        const commentId = req.user
        try {
            let commentCurrent = await Comment.findOne({_id : id})
            if (commentCurrent.user.valueOf() === commentId.id.valueOf()) {
                await Comment.findOneAndRemove({ _id: id })
                res.status(200).json({
                    message: "comment eliminated successfully!!",
                    success: true,
                })
            } else if (commentId.role == "admin") {
                await Comment.findOneAndRemove({ _id: id })
                res.status(200).json({
                    message: "comment eliminated successfully!!",
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find comment",
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

module.exports = commentController