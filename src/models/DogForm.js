const {Schema, model} = require('mongoose');
// const validator = require('validator')

const dogFormSchema = new Schema({

    name:{
        type: String,
        require: [true, 'Por favor coloca tu nombre']
    },
    age:{
        type: Number,
    },
    phone:{
        principal: {
            type: Number,
        },
        secondary:{
            ref_name: {
                type: String,
            },
            phone_num: {
                type: Number,
            },
        },
    },
    social_net:{
        facebook:{
            type: String,
        },
        instagram:{
            type: String,
        },
        twitter:{
            type: String,
        },
    },
    hometown:{
        type: String
    },
    address:{
        street:{
            type: String,
        },
        str_num:{
            type: Number,
        },
        floor:{
            type: String,
        },
        door:{
            type: String,
        },
        neighborhood:{
            type: String,
        },
    },
    security:{
        description:{
            type: String,
        },
        images:{
            type: String,
        },
    },
    family:{
        type: String,
    },
    family_pets:{
        type: String,
    },
    room_access:{
        type: String,
    },
    permission:{
        type: String,
        enum: ['Si','No'],
    },
    economy:{
        type: String,
    },
    travel:{
        type: String,
    },
    caretaker:{
        type: String,
    },
    occupation:{
        type: String
    },
    personal_alergies:{
        type: String,
    },
    family_alergies:{
        type: String,
    },
    prev_exp:{
        type: String,
    },
    pet_name:{
        type: String,
    },
    approved:{
        type: Boolean,
        default: false,
    }
})

const DogForm = model('DogForm', dogFormSchema);

module.exports = DogForm;