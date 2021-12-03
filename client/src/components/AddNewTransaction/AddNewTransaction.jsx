import { useState, useContext } from "react";
import { GlobalContext } from "../../context/context";


const AddNewTransaction = () => {

    // useState to change user input for transaction item
    const [text, setText] = useState('')

    // useState to change user input for amount
    const [amount, setAmount] = useState(0)

    // get addransaction state from contextjs
    const { addTransaction } = useContext(GlobalContext)

    // when form is submitted
    // create new transaction object with random id and default state of text and amount
    // call addTransaction context with new transaction as arg
    // convert amount to number
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholdder="Enter item" />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative = expense, positive = income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button className="btn">Add transaction</button>
                </div>
            </form>
        </>

    );
}

export default AddNewTransaction;