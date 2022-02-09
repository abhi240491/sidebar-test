import React from "react";
import './Navbar.css';
import {FiSearch, FiShoppingCart} from 'react-icons/fi';


function Navbar() {
        return(
            <div className="navbar">
            <div className = "navbar-search">
                <input className = "navbar-search-input" type = "text"/>
                <FiSearch className = "navbar-search-icon"></FiSearch>
            </div>
            <div className = "nav">
                <div className = "navbar-option">
                    <span className = "navbar-guest">
                        Hello Guest
                    </span>
                </div>
                
                    <div className = "navbar-basket">
                        <FiShoppingCart/>
                        <span className = "navbar-cart"> 
                        Cart
                        </span>
                    </div>
                
            </div>
            </div>
        )
}

export default Navbar;