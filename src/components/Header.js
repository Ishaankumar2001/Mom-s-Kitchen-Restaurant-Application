import React from 'react';
import ReactDOM from 'react-dom/client';
 import img from '../../assets/logo.png';
 import { useState } from 'react';
 import { Link } from 'react-router-dom';



export const Header= ()=>{
const [btnName,setbtnName]=useState(["Login"]);


    return(
        <div className='header'>
            <div className='logo_container'>
            <img className="logo" src={img} alt="logo"></img>
        </div>
        <div className='nav-items'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/about">About us</Link>
                    </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                    </li>
                <li>Cart</li>
                <button className='login' onClick={()=>{setbtnName(btnName=='Login'? "Logout" : "Login")}}>{btnName}</button>
            </ul>
        </div>
        </div>
    );
};


export default Header;