// @desc Get all transactions
// @route  GET /api/v1/transactions
//  @access public

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// @desc add transaction
// @route  POST /api/v1/transactions
//  @access public

exports.addTransactions = (req, res, next) => {
    res.send('POST transactions');
}

// @desc DELETE transactions
// @route  DELETE /api/v1/transactions/:id
//  @access public

exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions');
}