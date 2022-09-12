const User = require('../models/User')

const userController = {
    create: async (req, res) => {
        try {
            console.log(req.body)

            const newUser = await new User(req.body).save()
            res.status(201).json({
                success: true,
            })
        } catch (error) {
            res.status(400).json({
                message: "could't create user",
                success: false,
            })
        }
    },
    // updateUser: async (req, res) => {
    //     const { id } = req.params
    //     const updatedUser = req.body
    //     try {
    //         let user = await User.findOneAndUpdate({ _id: id }, updatedUser, { new: true })
    //         if (user) {
    //             res.status(200).json({
    //                 success: true,
    //             })
    //         } else {
    //             res.status(404).json({
    //                 message: "could't find user",
    //                 success: false
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         res.status(400).json({
    //             message: "error",
    //             success: false
    //         })
    //     }
    // },
}

module.exports = userController