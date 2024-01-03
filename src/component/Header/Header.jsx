import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import './Header.css';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(result => {
            console.log('logged out successfully');
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <nav className="header">
            <img src={logo} alt="Logo" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogOut}>Logout</button></span>}
            </div>
        </nav>
    );
};

export default Header;