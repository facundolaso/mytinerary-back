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
}

module.exports = userController