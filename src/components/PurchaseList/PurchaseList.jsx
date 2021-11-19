
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import Transaction from "../Transaction/Transaction";


const PurchaseList = () => {


    // get access and pull information from context file
    const { transactions } = useContext(GlobalContext);

    // Passed Transaction component needs to have unique key and prop from transactions in context

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction} />
                ))}

            </ul>
        </>
    );
}

export default PurchaseList;