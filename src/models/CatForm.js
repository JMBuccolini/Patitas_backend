const {Schema, model} = require('mongoose');
const validator = require('validator')

const catFormSchema = new Schema({

    name:{
        type: String,
        require: [true, 'Por favor coloca tu nombre'],
        validate:{
            validator: function(e){
                return /[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(e);
            },
            message: 'Solo se permiten letras'
        },
        maxlength:[20, 'Longitud máxima de 20 caracteres'],
    },
    age:{
        type: Number,
        require:[true, 'Por favor coloca tu edad'],
        validate:{
            validator: function(e){
                return /[0-9]/.test(e);
            },
            message: 'La edad debe ser un número'
        },
    },
    phone:{
        principal: {
            type: Number,
            validate(e) {
                if (!validator.isMobilePhone(e)) {
                 throw new Error('Phone is invalid');
                }
               }
        },
        secondary:{
            ref_name: {
                type: String,
            },
            phone_num: {
                type: String,
                validate(value) {
                    if (!validator.isMobilePhone(value)) {
                     throw new Error('Phone is invalid');
                    }
                   }
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
        type: String,
        require: [true, 'Por favor, coloca tu ciudad']
    },
    address:{
        street:{
            type: String,
            require: [true, 'Por favor, coloca tu direccion']
        },
        str_num:{
            type: Number,
            require: true
        },
        floor:{
            type: String,
        },
        door:{
            type: String,
        },
        neighborhood:{
            type: String,
            require: true
        },
    },
    security:{
        description:{
            type: String,
            require: [true, 'Por favor describe los espacios donde estará tu mascota']
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
        require: true
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

const CatForm = model('CatForm', catFormSchema);

module.exports = CatForm;