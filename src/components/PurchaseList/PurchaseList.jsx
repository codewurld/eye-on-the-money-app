
import { useContext } from "react";
import { GlobalContext } from "../../context/context";


const PurchaseList = () => {

    // get access and pull information from context file
    const context = useContext(GlobalContext);

    console.log(context);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-£400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </>
    );
}

export default PurchaseList;