const {Schema, model} = require('mongoose');

const catsSchema = new Schema({
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

const Cats = model('Cats', catsSchema);

module.exports = Cats;