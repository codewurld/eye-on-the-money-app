
const express = require('express');

// to create global variables for ports, database, URL, etc.
const dotenv = require('dotenv');

const colors = require('colors');
const morgan = require('morgan');

// access config
dotenv.config({ path: './config/config.env' })

// access routes
const transactions = require('./routes/transactions')

// initialize express app
const app = express()

// connect transactions route when request is made to URL below
app.use('/api/v1/transactions', transactions);

// connect to port or 5000 in case port can't be found
const PORT = process.env.PORT || 5001;

// run the server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));