import React from 'react';
import ReactDOM from 'react-dom/client';
 import img from '../../assets/logo.png';
 import { useState } from 'react';
 import { Link } from 'react-router-dom';
 import useOnlineStatus from '../utils/useOnlineStatus';



export const Header= ()=>{
const [btnName,setbtnName]=useState(["Login"]);
const onlineStatus=useOnlineStatus();

    return(
        <div>
        <div className='flex justify-between shadow-lg m-2 '>
            <div className='logo_container'>
            <img className="w-28" src={img} alt="logo"></img>
        </div>
        <div className='flex items-center '>
            <ul className='flex p-4 m-4'>
                <li className='px-4 p-2'>Online Status : {onlineStatus ? "🟢": "🔴"}</li>
                <li className='px-4 hover:bg-gray-400 p-2 rounded-lg'><Link to="/">Home</Link></li>
                <li className='px-4 hover:bg-gray-400 p-2 rounded-lg'>
                    <Link to="/about">About us</Link>
                    </li>
                <li className='px-4 hover:bg-gray-400 p-2 rounded-lg'>
                    <Link to="/contact">Contact us</Link>
                    </li>
                    <li className='px-4 hover:bg-gray-400 p-2 rounded-lg'>
                    <Link to="/grocery">Grocery</Link>
                    </li>
                <li className='px-4 hover:bg-gray-400 p-2 rounded-lg'>Cart</li>
                <button className='px-4 hover:bg-blue-400 p-2 rounded-lg' onClick={()=>{setbtnName(btnName=='Login'? "Logout" : "Login")}}>{btnName}</button>
            </ul>
        </div>
        </div>
        </div>
    );
};


export default Header;