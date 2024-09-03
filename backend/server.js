
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/UserSchema');

const connectDB = require('./db/conn');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.options('/contact', cors());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World from the server');
});

app.post('/contact', (req, res) => {
    console.log('Received data:', req.body);

    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(422).json({ error: "Please fill the form properly" });
    }

    const user = new User({ name: fullName, email, message });

    user.save()
        .then(() => {
            res.status(201).json({ message: "User contacted successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Failed to contact" });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
