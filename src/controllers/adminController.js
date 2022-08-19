const Cats = require('../models/Cats');
const Dogs = require('../models/Dogs');

exports.getAdoptedPets = async (_,res) =>{
    try {
        const adoptedCats = await Cats.countDocuments({adopted:true});
        const adoptedDogs = await Dogs.countDocuments({adopted:true});
        const sum = adoptedCats + adoptedDogs;

        res.status(200).json({
            status:"success",
            data: sum
        })
    } catch (error) {
        console.log(error)
    }
};