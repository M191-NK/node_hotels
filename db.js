

const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.LOCAL_MDB_URL;
const mongoURL = process.env.MONGODB_URL;
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