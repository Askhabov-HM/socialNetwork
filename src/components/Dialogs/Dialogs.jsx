import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

import DialogsItem from './DialogsItem/DialogsItem.jsx';
import Message from './Messages/Messages.jsx';
import AddNewMessage from './AddNewMessage/AddNewMessage.jsx';
import AddNewDialog from './AddNewDialog/AddNewDialog.jsx';

import CSS from './Dialogs.module.css';


const Dialogs = (props) => {
    
    let dialogsGenerate = props.dialogsData.map(d => <DialogsItem key={d.id} name={d.name} pathNumber={d.id} />);

    let messagesGenerate = props.messagesData.map(m => <Message key={m.id} messageText={m.text} sender={m.sender} />)

    let addDialogBtn = (dialogName) => {
        props.addDialog(dialogName.addNewDialog);
        console.log(dialogName)
    }

    let addMessageBtn = (messageText) => {
        props.sendMessage(messageText.addNewMessage);
    }

    return (
        <div className={CSS.dialogsPage}>
            <div className={CSS.dialogsList}>
                {dialogsGenerate}
                <AddNewDialog onSubmit={addDialogBtn}/>
            </div>
            <div className={CSS.userMessages}>
                {messagesGenerate}
                <AddNewMessage onSubmit={addMessageBtn}/>
            </div>
        </div>
    )
}

export default Dialogs;
