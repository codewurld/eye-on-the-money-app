
import { useContext } from 'react';
import { GlobalContext } from '../../context/context';

import './IncomeAndOutgoings.css'

const IncomeAndOutgoings = () => {

    // get access and pull information from context file
    const { transactions } = useContext(GlobalContext);

    // calculate total income and total outgoings

    // put amount of each transaction in new array
    const amounts = transactions.map(transaction => transaction.amount);

    // use filter function to determine income vs outgoing
    // then calculate using reduce function
    const totalIncome = amounts.filter(
        item => item > 0).reduce((totalValue, currentItemValue) => (totalValue += currentItemValue), 0)
        .toFixed(2);

    const totalOutgoings = (amounts.filter(item => item < 0).reduce((totalValue, currentItemValue) => (totalValue += currentItemValue), 0) * -1).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">£{totalIncome}</p>
            </div>
            <div>
                <h4>Outgoings</h4>
                <p className="money minus">£{totalOutgoings}</p>
            </div>


        </div>

    );
}

export default IncomeAndOutgoings;