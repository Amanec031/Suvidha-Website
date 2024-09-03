
const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE;

const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Connection to MongoDB successful');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
