
const path = require('path');

const express = require('express');

// to create global variables for ports, database, URL, etc.
const dotenv = require('dotenv');

const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');

// access config
dotenv.config({ path: './config/config.env' })

connectDB();

// access routes
const transactions = require('./routes/transactions')

// initialize express app
const app = express()

// initialize body parser in controller
app.use(express.json());

// display API requests in terminal if in development mode
if (process.env.NONDE_ENV === "development") {
    app.use(morgan('dev'));
}

// connect transactions route when request is made to URL below
app.use('/api/v1/transactions', transactions);

// if in production mode
// set static folder using build folder in client
// load index.html (contains static entry point to React app in production)
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    //  when req is made to anything * except for API routes (line 34)
    //  get path access several levels down into index.html
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

// connect to port or 5000 in case port can't be found
const PORT = process.env.PORT || 5002;

// run the server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));