const Cats = require('../models/Cats');


exports.post = async (req,res)=>{

    try {
        const imageURL = "https://acortar.link/6ErdRR"
        const {name, breed, sex, age, health, description, weight, color,adopted} = req.body
        const newCat = await Cats.create({
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
            data: newCat
        })
} catch (error) {
    console.log(error);
    }
};

exports.get = async (_,res)=>{
    try {
        
        const getAllCats = await Cats.find()
    
        res.json(getAllCats);
        
    } catch (error) {
        console.log(error)
    }
}

exports.getOneCat = async (req,res)=>{
    try {
        const {name} = req.query
        const findOne= await Cats.find({name:name})
        res.status(200).json({
            status: "success",
            data:{
                findOne
            }
        })
            
    
    } catch (error) {
        console.log(error);
    }
}