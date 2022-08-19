const {Schema, model} = require('mongoose');

const provisSchema = new Schema({
    name:{
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
    social_net:{
        facebook:{
            type: String,
        },
        instagram:{
            type: String,
        },
    },
    images:{
        type: String
    },
    family_pets:{
        type: String
    },
    permission:{
        type: String,
        enum: ['Si','No'],
    },
    alt_number:{
        type: Number
    },
    provi_of:{
        type: String,
        enum:['Gato','Perro'],
    }
})

const ProvisForm = model('ProvisForm',provisSchema);
module.exports = ProvisForm;