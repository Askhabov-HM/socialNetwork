import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CSS from './SideBar.module.css';




const SideBar = (props) => {
    let id = props.id

    return (
        <>
            <nav className={CSS.nav}>
                <div><NavLink to={`/profile/${id}`} activeClassName={CSS.activeLink}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' activeClassName={CSS.activeLink}>Dialogs</NavLink></div>
                <div><NavLink to='/users' activeClassName={CSS.activeLink}>Users</NavLink></div>
                <div><NavLink to='/news' activeClassName={CSS.activeLink}>News</NavLink></div>
                <div><NavLink to='/settings' activeClassName={CSS.activeLink}>Settings</NavLink></div>
            </nav>
        </>
    );
}

const mapStateToProps = (state) => (
    {
        id: state.auth.id
    }
) 

export default connect(mapStateToProps,null)(SideBar);