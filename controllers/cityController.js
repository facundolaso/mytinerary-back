const City = require('../models/City')

const cityController = {
    readAll: async(req,res) => {

        try{
            let cities = await City.find()
            if(cities){
                res.status(200).json({
                    response: {city}
                })

            } else{
                res.status(404).json({
                    message: "could't find cities",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    },
    readOne: async(req,res) => {
        const {id} = req.params
        try{
            let city = await City.findOne({_id:id})
            if(city){
                res.status(200).json({
                    response: city
                })
            } else {
                res.status(404).json({
                    message: "could't find city",
                    success: false
                })
            }

        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })

        }
    },
    create: async (req,res) =>{
        try {
            const newCity = await new City(req.body).save()
            if (newCity) {
                res.status(201).json({
                    response: City.id
                })                
            } else {
                res.status(404).json({
                    message: "could't create city",
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