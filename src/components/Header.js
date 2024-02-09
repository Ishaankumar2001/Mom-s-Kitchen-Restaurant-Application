import React from 'react';
import ReactDOM from 'react-dom/client';
 import img from '../../assets/logo.png';


export const Header= ()=>{
    return(
        <div className='header'>
            <div className='logo_container'>
            <img className="logo" src={img} alt="logo"></img>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};


export default Header;