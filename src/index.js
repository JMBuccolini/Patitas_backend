const express = require('express');
const morgan = require('morgan');
const getCatsRouter = require('./routes/getCatsRouter');
const getDogsRouter = require('./routes/getDogsRouter');
require('dotenv').config();
const mongoose = require('mongoose');
const catAdoptionRouter = require('./routes/catAdoptionRouter');
const adminRouter = require('./routes/adminRouter');
const provisRouter = require('./routes/provisRouter');
const app = express();

//database conection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true

})
    .then(db =>console.log('Database is connected'))
    .catch(err=> console.log(err));

//settings
app.set('port', process.env.PORT || 5050);

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/admin', adminRouter);
app.use('/beprovi',provisRouter);
app.use('/catadoption', catAdoptionRouter);
// app.use('/dogadoption', dogAdoptionRouter);
app.use('/dogs', getDogsRouter);
app.use('/cats', getCatsRouter);

//server run
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})