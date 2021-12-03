import './LandingPage.css'
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="page-wrapper" >
            <div>
                <img src="assets/eye-spyTT.png" alt="eye on the money logo" />
            </div>
            <div className="button-wrapper">
                <Link to="/home">
                    <button className="landingPage-btn" >Click to use</button>
                </Link>

            </div>



        </div>
    )
}

// style={{ color: "#5271ff" }}


export default LandingPage;