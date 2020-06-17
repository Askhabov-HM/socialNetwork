import React from 'react';
import { NavLink } from 'react-router-dom';

import CSS from './SideBar.module.css';


let userId = 5;

const SideBar = () => {
    return (
        <>
            <nav className={CSS.nav}>
                <div><NavLink to={'/profile/' + userId} activeClassName={CSS.activeLink}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' activeClassName={CSS.activeLink}>Dialogs</NavLink></div>
                <div><NavLink to='/users' activeClassName={CSS.activeLink}>Users</NavLink></div>
                <div><NavLink to='/news' activeClassName={CSS.activeLink}>News</NavLink></div>
                <div><NavLink to='/settings' activeClassName={CSS.activeLink}>Settings</NavLink></div>
            </nav>
        </>
    );
}


export default SideBar;