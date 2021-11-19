
// Reducer is how we specify state changes in response to specific actions 
// spread current state in new case
// if transaction id is not the same as its' payload, filter out

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state
    }
}