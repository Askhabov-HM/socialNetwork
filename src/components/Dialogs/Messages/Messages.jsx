import React, { Component } from 'react';

import CSS from './../Dialogs.module.css';

const Message = (props) => {
    return(
        <div className={CSS.message}>{props.messageText}</div>
    )
}

export default Message;
