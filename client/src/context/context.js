import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

// initial state
// transaction using dummy data - to perform calculations, i.e balance
// using useContext in other components, we can destructure and extract anything we want from our initial state, i.e. transactions..

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// useContext to avoid pop drilling
export const GlobalContext = createContext(initialState);

// Create Provider component to give context and state and actions access to all components
// value object of transactions allows transactions access to all components

// children are all components wrapped in Appjs

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    // connect front end with backend
    // similar to GET request on Postman 
    async function getTransactions() {
        try {
            // fetch transaction from API in the backend
            const response = await axios.get('/api/v1/transactions');

            // get transaction object from response
            // send into state
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: response.data.data
            })

        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }


    // payload is any data we want to send to our reducer
    // pass reducer in AppReducer.js file
    // call transaction on axios delete function and delete from server
    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }

    }

    async function addTransaction(transaction) {
        // define content type to push to DB
        const config = {
            'Content-Type': 'application/json'
        }

        // post transaction and config to DB
        try {
            const response = await axios.post('/api/v1/transactions', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: response.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }


    // in order to get access to reducer functions, it must passed in Provider

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}