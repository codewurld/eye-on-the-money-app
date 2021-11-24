
const express = require('express');
// access router
const router = express.Router();

// access controllers
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactionsController')

// when GET/POST request is made to route / call getTransactions/addTransactions controller
router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

// delete request requires id to determine which transaction to delete
router
    .route('/:id')
    .delete(deleteTransactions)

// to get access to router globally
module.exports = router;
