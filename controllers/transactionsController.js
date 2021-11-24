const Transaction = require('../models/Transaction')

// @desc Get all transactions
// @route  GET /api/v1/transactions
//  @access public

// get all transaction from model
// if successful, return ok status with json objects

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc add transaction
// @route  POST /api/v1/transactions
//  @access public

exports.addTransactions = async (req, res, next) => {

    try {
        // get data from request body
        const { text, amount } = req.body;

        // add data to Transaction schema in model
        const transaction = await Transaction.create(req.body);

        // return success status
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        // if user error return 400 status
        // if server error return 500 status

        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(value => value.message)

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}


// @desc DELETE transactions
// @route  DELETE /api/v1/transactions/:id
//  @access public

exports.deleteTransactions = async (req, res, next) => {
    try {
        // get access to transaction by ID
        const transaction = await Transaction.findById(req.params.id);

        // if no transaction found, return error
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found"
            });
        }

        // if transaction id found, DELETE
        await transaction.remove();

        // return OK status
        return res.status(200).json({
            success: true,
            data: {}
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}