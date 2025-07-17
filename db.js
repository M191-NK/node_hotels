

const mongoose = require('mongoose');
const mongoURL = "mongodb://0.0.0.0/hotels"

mongoose.connect(mongoURL);


const db = mongoose.connection;

db.on('connected',() => {
    console.log('Connected to MongoDB server');
})

db.on('error',(err) => {
    console.log('MongoDB Connection error:',err);
})

db.on('disconnected',() => {
    console.log('MongoDB disConnect');
})

module.exports = db;