import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
// transaction using dummy data - to perform calculations, i.e balance

const initialState = {
    transactions: [
        { id: 1, text: "Phone Bill", amount: -35 },
        { id: 2, text: "Rent", amount: -900 },
        { id: 3, text: "Salary", amount: 4000 },
        { id: 4, text: "Spotify Subscription", amount: -9.99 },
        { id: 5, text: "Nando's Restaurant", amount: -17.59 },
        { id: 6, text: "AirBnB Receipt", amount: 389.37 },
        { id: 7, text: "Ryanair", amount: -42.89 },
    ]
}

// useContext to avoid pop drilling
export const GlobalContext = createContext(initialState);

// Create Provider component to give context and state and actions access to all components
// value object of transactions allows transactions access to all components

// children are all components wrapped in Appjs

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)
}