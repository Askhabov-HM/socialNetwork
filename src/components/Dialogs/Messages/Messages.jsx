import React, { Component } from 'react';

import CSS from './../Dialogs.module.css';

const Message = ({messageText, ...restProps}) => {
    return(
        <div className={CSS.message}>{messageText}</div>
    )
}

export default Message;
