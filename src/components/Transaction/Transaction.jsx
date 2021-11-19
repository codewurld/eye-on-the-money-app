
import { useContext } from "react";
import { GlobalContext } from "../../context/context";


const Transaction = ({ transaction }) => {

    // get deleteTransaction state from contextjs
    const { deleteTransaction } = useContext(GlobalContext)

    // determine income or expenditure symbol based on user amount
    // if symbol is - display red for expenditure : if + display green for income
    const symbol = transaction.amount < 0 ? '-' : '+';

    // Math.abs function makes numbers absolute

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{symbol}£{Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}

export default Transaction;