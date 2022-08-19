const CatForm = require('../models/CatForm');

exports.post = async(req,res)=>{
    try {
        const newCatAdoption = await CatForm.create({
            name: req.body.name,
            age: req.body.age,
            phone: {
                principal: req.body.phone.principal,
                secondary: {
                    ref_name: req.body.phone.secondary.ref_name,
                    phone_num: req.body.phone.secondary.phone_num
                }
            },
            social_net:{
                facebook: req.body.social_net.facebook,
                instagram: req.body.social_net.instagram,
                twitter: req.body.social_net.twitter
            },
            hometown: req.body.hometown,
            address:{
                street: req.body.address.street,
                str_num: req.body.address.str_num,
                floor: req.body.address.floor,
                door: req.body.address.door,
                neighborhood: req.body.address.neighborhood
            },
            security:{
                description: req.body.security.description,
                images: req.body.security.images
            },
            family: req.body.family,
            family_pets: req.body.family_pets,
            room_access: req.body.room_access,
            permission: req.body.permission,
            economy: req.body.economy,
            travel: req.body.travel,
            caretaker: req.body.caretaker,
            occupation: req.body.occupation,
            personal_alergies: req.body.personal_alergies,
            family_alergies: req.body.family_alergies,
            prev_exp: req.body.prev_exp,
            pet_name: req.body.pet_name,
        })
    res.status(201).json({
        status: "success",
        data: newCatAdoption,
    })

    } catch (error) {
        console.log(error);
    }
};

exports.getApprovedCatAdoption = async (_,res)=>{
    try {
        
        const approved = await CatForm.countDocuments({approved: true})

        res.status(200).json({
            status: "success",
            data:approved
        })
        
    } catch (error) {
        console.log(error)
    }
};

exports.approveCatForm = async (req,res)=>{
    try {
        
        const validate = await CatForm.findById({_id: req.params.id});
        if (!validate){
            return "No hay un formulario con ese id"; 
        }
        
        const filter = {_id:req.params.id};
        const update = {approved: true};
    
        const searchForm = await CatForm.findByIdAndUpdate(filter, update,{new:true});
    
        res.status(200).json({
            satatus: "success",
            data: 'done',
        })
    } catch (error) {
        console.log(error);
    }
}