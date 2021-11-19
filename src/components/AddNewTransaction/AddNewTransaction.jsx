import { useState } from "react";


const AddNewTransaction = () => {

    // useState to change user input for transaction item
    const [text, setText] = useState('')

    // useState to change user input for amount
    const [amount, setAmount] = useState(0)


    return (
        <>
            <h3>Add new purchase</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholdder="Enter item" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <button className="btn">Add transaction</button>
                </div>
            </form>
        </>

    );
}

export default AddNewTransaction;