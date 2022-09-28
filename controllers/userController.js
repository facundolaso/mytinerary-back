const User = require('../models/User')
const Itinerary = require('../models/Itinerary')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userValidator = Joi.object({
    "name": Joi.string().min(1).max(30).message('INVALID_NAME'),
    "lastName": Joi.string().min(1).max(30).message('INVALID_LASTNAME'),
    "mail": Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).message('INVALID_MAIL'),
    "password": Joi.string().min(8).max(30).message('INVALID_PASSWORD'),
    "photo": Joi.string().uri().message('INVALID_URL'),
    "country": Joi.string().max(20).message('INVALID_COUNTRY'),
    "from": Joi.string().min(4).max(20).message('INVALID_COUNTRY'),
    "role": Joi.string().min(4).max(20).message('INVALID_COUNTRY'),
})


const userController = {
    create: async (req, res) => {
        try {

            await new User(req.body).save()
            res.status(201).json({
                success: true,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false,
            })
        }
    },
    signUp: async (req, res) => {
        let { name, photo, mail, password, role, from, country, lastName } = req.body
        try {

            await userValidator.validateAsync(req.body)
            let user = await User.findOne({ mail })
            if (!user) {

                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                if (from == 'form') {
                    password = bcryptjs.hashSync(password, 10)
                    user = await new User({ name, lastName, country, photo, mail, password: [password], role, from: [from], logged, verified, code }).save()
                    sendMail(mail, code)
                    res.status(201).json({
                        message: user.name + " signed up from form, please verify your email",
                        success: true,
                    })

                } else {
                    password = bcryptjs.hashSync(password, 10)
                    let verified = true
                    user = await new User({ name, lastName, country, photo, mail, password: [password], role, from: [from], logged, verified, code }).save()
                    res.status(201).json({
                        message: user.name + " signed up from " + user.from,
                        success: true,
                    })

                }
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "user already exist, please sign In",
                        success: false,
                    })

                } else {
                    user.from.push(from)
                    user.verified = true
                    password = bcryptjs.hashSync(password, 10)
                    user.password.push(password)
                    await user.save()
                    res.status(201).json({
                        message: user.name + " signed up from " + user.from,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params
        const updatedUser = req.body
        try {
            let user = await User.findOneAndUpdate({ _id: id }, updatedUser, { new: true })
            if (user) {
                res.status(200).json({
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: "could't find user",
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
    verifyMail: async (req, res) => {
        const { code } = req.params
        try {
            let user = await User.findOne({ code })
            if (user) {
                user.verified = true
                await user.save()
                res.redirect(`http://localhost:3000/`)

            } else {
                res.status(404).json({
                    message: "email has not account yet",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "could't verify account",
                success: false
            })
        }
    },
    signIn: async (req, res) => {

        const { mail, password, from } = req.body
        try {
            let user = await User.findOne({ mail })
            if (!user) {
                res.status(404).json({
                    message: "user not found, please sign up",
                    success: false,
                })
            } else if (user.verified) {
                const verifyPassword = user.password.filter(passwordElement => bcryptjs.compareSync(password, passwordElement))
                if (from == 'form') {
                    if (verifyPassword.length > 0) {
                        const logedUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            photo: user.photo,
                            logged: user.logged
                        }
                        user.logged = true
                        await user.save()

                        res.status(200).json({
                            success: true,
                            response: { user: logedUser },
                            message: 'Welcome ' + user.name,
                            token: token
                        })
                    } else {
                        res.status(400).json({
                            message: "Username or password incorrect",
                            success: false
                        })
                    }

                } else {
                    if (verifyPassword.length > 0) {
                        const logedUser = {
                            id: user._id,
                            name: user.name,
                            mail: user.mail,
                            role: user.role,
                            photo: user.photo,
                            logged: user.logged
                        }
                        user.logged = true
                        await user.save()
                        const token = jwt.sign({ id: user._id }, process.env.KEY_JWT, { expiresIn: 60 * 60 * 24 })
                        res.status(200).json({
                            success: true,
                            response: { user: logedUser },
                            message: 'Welcome ' + user.name,
                            token: token
                        })
                    } else {
                        res.status(400).json({
                            message: "Invalid credentials",
                            success: false
                        })
                    }

                }
            } else {
                res.status(401).json({
                    message: "Please, verify your email account and try again",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "ERROR, try again",
                success: false
            })
        }
    },
    signOut: async (req, res) => {

        const { mail } = req.body
        try {
            let user = await User.findOne({ mail })
            if (!user) {
                res.status(404).json({
                    message: "user not found, please sign up",
                    success: false,
                })
            } else {
                user.logged = false
                await user.save()
                res.status(200).json({
                    message: "See you soon " + user.name,
                    success: true,
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "ERROR, try again",
                success: false
            })
        }
    },
}

module.exports = userController