import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import h from './Header.module.css';

import Loader from './../Loader/Loader';

const Header = ({isAuth, login, logout, ...restProps}) => {
    if(!isAuth ){
        return <Loader />
      }


    return(
        <>
            <header className={h.header}>
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt=""/>
                <span> --------------</span>
                {isAuth ? <span>{login} <button onClick={logout}>Logout</button></span> : <NavLink to={'/login'}>LOGIN</NavLink>}
            </header>
        </>
    );
    
}

export default Header;
