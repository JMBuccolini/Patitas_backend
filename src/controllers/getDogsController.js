const Dogs = require('../models/Dogs');


exports.post = async (req,res)=>{

    try {
        const imageURL = "https://acortar.link/eapOKg"
        const {name, breed, sex, age, health, description, weight, color,adopted} = req.body
        const newDog = await Dogs.create({
            name,
            breed,
            sex,
            age,
            health,
            description,
            weight,
            color,
            image: imageURL,
            adopted,
        })
        res.status(201).json({
            status: "success",
            data: newDog
        })
} catch (error) {
    console.log(error.message)
    }
};

exports.get = async (_,res)=>{
    try {
        
        const getAllDogs = await Dogs.find()
    
        res.json(getAllDogs);
        
    } catch (error) {
        console.log(error.message)
    }
}

exports.getOneDog = async (req,res)=>{
    try {
        const {name} = req.query
        const findOne= await Dogs.find({name:name})
        
        res.status(200).json({
            status: "success",
            data:{
                findOne
            }
        })
            
    
    } catch (error) {
        console.log(error.message)
    }
}

