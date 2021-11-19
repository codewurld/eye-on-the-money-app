
import { useContext } from "react";
import { GlobalContext } from "../../context/context";


const Transaction = ({ transaction }) => {

    // get access and pull information from context file
    const { transactions } = useContext(GlobalContext);

    return (
        <li className="minus">
            {transactions.text} <span>{transactions.amount}</span><button className="delete-btn">x</button>
        </li>
    );
}

export default Transaction;