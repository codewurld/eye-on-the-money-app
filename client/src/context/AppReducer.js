
// Reducer is how we specify state changes in response to specific actions
// each action must be added to a case type in reducer


// spread current state in new case
// if transaction id is not the same as its' payload, filter out

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}