import React, { Component } from 'react';
import Dialogs from './Dialogs';

import
    {sendMessageActionCreator,
    updateMessageActionCreator,
    addDialogActionCreator,
    updDialogChangeActionCreator} from '../../redux/dialogs-reducer.js';

import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newDialogText: state.dialogsPage.newDialogText,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDialog: (dialogTitle) => {
            dispatch(addDialogActionCreator(dialogTitle));
        },
        dialogChange: (updDialogTitle) => {
            dispatch(updDialogChangeActionCreator(updDialogTitle));
        },
        sendMessage: (messageText) => {
            dispatch(sendMessageActionCreator(messageText));
        },
        updateMessage: (newMessage) => {
            dispatch(updateMessageActionCreator(newMessage));
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;