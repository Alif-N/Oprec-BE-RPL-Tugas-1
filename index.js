const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

// Import model
const Kegiatan = require('./src/model');

const app = express();
const port = 8080;

// Middleware untuk parsing JSON
app.use(express.json());
app.use('/kegiatan', routes);

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1/sample_db')
    .then((result) => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console(err)
    });


app.listen(8080, () => {
    console.log(`server is running on http://localhost:${port}`);
})