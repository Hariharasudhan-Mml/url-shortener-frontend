import React from 'react';
import {useSelector} from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const name=useSelector(state=>state.name)
  return (
    <div className="header">
      <Link to='/'
        className="header__left"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofbSjmak0_y5-I_FP0OzhydAjNFKFPZo5ZQ&usqp=CAU"
          className="header__logo"
        />
        <h3> URL-shortener </h3>
      </Link>
      <div className="header__right">
        <NavLink to="/dashboard" className="navlinks">
          Dashboard
        </NavLink>

        <NavLink to="/login" className="navlinks">
         {name ? <span onClick={()=>{
           localStorage.removeItem('token')
           localStorage.removeItem('name');
           window.location.pathname='/'
         }}>Logout</span> : 'Accounts'} 
        </NavLink>
        <NavLink to="/table" className="navlinks">
          Created URL
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
