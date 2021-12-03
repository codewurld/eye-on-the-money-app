import { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import { numberWithCommas } from '../../utils/format'
import './balance.css'


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
        <div className="balance-header">
            <h4>Your Balance</h4>
            <h1>£{numberWithCommas(total)}</h1>
        </div>
    );


}

export default Balance;