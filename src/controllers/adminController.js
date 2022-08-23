const Cats = require('../models/Cats');
const Dogs = require('../models/Dogs');
const CatForm = require('../models/CatForm');
const ProvisForm = require('../models/ProvisForm');

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
        throw new Error(error)
    }
};

exports.approvedCatAdoptionForm = async (_,res)=>{
    try {
        
        const approved = await CatForm.countDocuments({approved: true})

        res.status(200).json({
            status: "success",
            data:approved
        })
        
    } catch (error) {
        throw new Error(error)
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
        throw new Error(error)
    }
};

exports.adoptedCat = async (req,res)=>{
    try {
        
        const validate = await Cats.findById({_id: req.params.id});
        if (!validate){
            return "No hay un gato con ese id"; 
        }
        
        const filter = {_id:req.params.id};
        const update = {adopted: true};
    
        const searchCat = await Cats.findByIdAndUpdate(filter, update,{new:true});
    
        res.status(200).json({
            satatus: "success",
            data: 'done',
        })
    } catch (error) {
        throw new Error(error)
    }
};

exports.adoptedDog = async (req,res)=>{
    try {
        
        const validate = await Dogs.findById({_id: req.params.id});
        if (!validate){
            return "No hay un perro con ese id"; 
        }
        
        const filter = {_id:req.params.id};
        const update = {adopted: true};
    
        const searchCat = await Dogs.findByIdAndUpdate(filter, update,{new:true});
    
        res.status(200).json({
            satatus: "success",
            data: 'done',
        })
    } catch (error) {
        throw new Error(error)
    }
};

exports.approveProvi = async (req,res) =>{
    try {
        const filter= {_id:req.params.id};
        const update={approved : true};
        const approveProvi = await ProvisForm.findByIdAndUpdate(filter,update,{new:true});

        res.status(200).json({
            status: "success",
            data:"done"
        })
    } catch (error) {
        throw new Error(error)
    }
};