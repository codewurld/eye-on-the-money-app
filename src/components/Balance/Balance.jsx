import { useContext } from 'react';
import { GlobalContext } from '../../context/context';

import './balance.css'

const Balance = () => {

    // get access and pull information from context file
    const { transactions } = useContext(GlobalContext);

    // calculate total balance

    // put amount of each transaction in new array
    const amounts = transactions.map(transaction => transaction.amount);

    // add total amount using reduce function
    const total = amounts.reduce((totalValue, currentItemValue) => (totalValue += currentItemValue), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>£{total}</h1>
        </>
    );


}

export default Balance;