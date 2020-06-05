import React, { Component } from 'react';
import h from './Header.module.css';

const Header = () => {
    return(
        <>
            <header className={h.header}>
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt=""/>
            </header>
        </>
    );
    
}

export default Header;
