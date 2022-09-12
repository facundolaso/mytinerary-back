const User = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')


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
    signUp: async(req,res) => {
        let{name, photo, mail, password, role, from, country, lastName} = req.body
        try {
            let user = await User.findOne({mail})
            if(!user){
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')
                if(from=='form'){
                    password = bcryptjs.hashSync(password,10)
                    user = await new User ({name,lastName,country,photo,mail,password:[password],role,from:[from],logged,verified,code}).save()
                    sendMail(mail,code)
                    res.status(201).json({
                        message: "user signed up from form",
                        success: true,
                    })

                } else{
                    password = bcryptjs.hashSync(password,10)
                    let verified = true
                    user = await new User ({name,lastName,country,photo,mail,password:[password],role,from:[from],logged,verified,code}).save()
                    res.status(201).json({
                        message: "user signed up from form",
                        success: true,
                    })
                    
                }
            }else{
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "user already exist",
                        success: false,
                    })
                    
                }else{
                    user.from.push(from)
                    user.verified = true
                    password = bcryptjs.hashSync(pass,10)
                    user.password.push(password)
                    await user.save()
                    res.status(201).json({
                        message: "user signed up from "+from,
                        success: true
                    })
                }
            }
        } catch(error) {
            console.log(error)
            res.status(400).json({
                message: "could't signed up",
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
}

module.exports = userController