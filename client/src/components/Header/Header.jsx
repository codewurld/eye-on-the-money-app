import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link to="/">
            <img className="logo" src="/assets/eye-spyTT.png" />
        </Link>

    );
}


export default Header;