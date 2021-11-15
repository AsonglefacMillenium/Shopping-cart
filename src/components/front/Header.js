import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({cartItems}) =>{
    return(
<header className="header">
<div>
    <h1>
        <Link to="/" className="logo">ElectMarket</Link>
    </h1>
</div>

<div className="header-links">
    <ul>
    <li>
            <Link to="/">Home</Link>
        </li>
   
        <li>
            <Link to="/signup">Signup</Link>
        </li>
        <li>
            <Link to="/cart">
                cart
                <span className="cart-length">
                    {cartItems.length ===0 ? "" : cartItems.length }
                </span>
            </Link>
        </li>
    </ul>
</div>

</header>
    );
    
}

export default Header;