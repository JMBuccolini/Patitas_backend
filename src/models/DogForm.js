const {Schema, model} = require('mongoose');
// const validator = require('validator')

const dogFormSchema = new Schema({

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
                type: Number,
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
        require:true
    },
    family_pets:{
        type: String,
        require:true
    },
    room_access:{
        type: String,
        require:true
    },
    permission:{
        type: String,
        require:[true, 'Debes indicar si tienes permiso'],
        enum: ['Si','No'],
    },
    economy:{
        type: String,
        require:true
    },
    travel:{
        type: String,
        require:true
    },
    caretaker:{
        type: String,
        require:true
    },
    occupation:{
        type: String,
        require:true
    },
    personal_alergies:{
        type: String,
        require:true
    },
    family_alergies:{
        type: String,
        require:true
    },
    prev_exp:{
        type: String,
        require:true
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