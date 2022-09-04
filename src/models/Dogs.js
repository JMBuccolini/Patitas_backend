const {Schema, model} = require('mongoose');

const dogsSchema = new Schema({
    name:{
        type: String,
    },
    breed:{
        type:String,
    },
    sex:{
        type: String,
    },
    age:{
        type: Date,
        immutable: true,
    },
    health:{
        type: String,
    },
    description:{
        type: String,
    },
    size:{
        type: String,
    },
    color:{
        type: String,
    },
    image:{
        type: String,
    },
    adopted:{
        type: Boolean,
        default: false,
    },
})

const Dogs = model('Dogs', dogsSchema);

module.exports = Dogs;