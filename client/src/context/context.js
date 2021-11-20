import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
// transaction using dummy data - to perform calculations, i.e balance
// using useContext in other components, we can destructure and extract anything we want from our initial state, i.e. transactions..

const initialState = {
    transactions: []
}

// useContext to avoid pop drilling
export const GlobalContext = createContext(initialState);

// Create Provider component to give context and state and actions access to all components
// value object of transactions allows transactions access to all components

// children are all components wrapped in Appjs

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    // payload is any data we want to send to our reducer
    // pass reducer in AppReducer.js file
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    // in order to get access to reducer functions, it must passed in Provider

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}