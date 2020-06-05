import React, { Component } from 'react';
import Dialogs from './Dialogs';


import {sendMessageActionCreator, updateMessageActionCreator, addDialogActionCreator} from '../../redux/dialogs-reducer.js';

const DialogsContainer = (props) => {

    let state = props.store.getState();
    


    let sendMessageBtn = (messageText) => {
        props.store.dispatch(sendMessageActionCreator(messageText));
    }

    let sendMessageChange = (newMessage) => {
        props.store.dispatch(updateMessageActionCreator(newMessage))
    }

    let addDialogBtn = (dialogTitle) => {
        props.store.dispatch(addDialogActionCreator(dialogTitle));
    }

    return (
        <Dialogs
            addDialog={addDialogBtn}
            sendMessage={sendMessageBtn}
            updateMessage={sendMessageChange}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            newMessageText={state.dialogsPage.newMessageText}
             /> 
    )
}

export default DialogsContainer;
