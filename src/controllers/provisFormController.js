const ProvisForm = require('../models/ProvisForm');

exports.post = async (req,res) =>{
    try {
        const newProvi = await ProvisForm.create({
                name: req.body.name,
                address:{
                    street: req.body.address.street,
                    str_num: req.body.address.str_num,
                    floor: req.body.address.floor,
                    door: req.body.address.door,
                    neighborhood: req.body.address.neighborhood
                },
                social_net:{
                    facebook: req.body.social_net.facebook,
                    instagram: req.body.social_net.instagram,
                },
                family_pets: req.body.family_pets,
                permission: req.body.permission,
                alt_number: req.body.alt_number,
                provi_of: req.body.provi_of
        })
        res.status(201).json({
            status:"success",
            data: newProvi
        })
        
    } catch (error) {
        console.log(error)
    }

};
