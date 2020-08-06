import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import CSS from './../Dialogs.module.css';

const DialogsItem = ({ pathNumber, name, ...restProps}) => {
    return (
        <div className={CSS.dialogItem + ' ' + CSS.activeDialog}>
            <div className={CSS.avatarBlockForDialog}>
                <img className={CSS.avatar} src="https://i.stack.imgur.com/x8PhM.png" alt=""/>
            </div>
            <NavLink to={'/dialogs/' + pathNumber}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem;
