const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const path = require("path");
// const moment = require("moment")
// const logger = require('./middleware/logger')
const cv = require('./routes/api/cv');
const register = require('./routes/api/register')
const app = express();

// Body parser Middleware
app.use(bodyParser.json())

// Connect to database
const db = require('./config/keys').mongoURI;
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose
    .connect(db,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

// Use Routes
app.use('/api/cv', cv)
app.use('/api/register', register)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

