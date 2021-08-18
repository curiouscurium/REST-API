const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
app.use(express.urlencoded());
app.use(express.json());



// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute)


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },() => console.log('connected to DB!'));


// Listening to the server
app.listen(3000);