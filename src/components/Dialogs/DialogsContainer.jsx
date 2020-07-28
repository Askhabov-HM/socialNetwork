import React, { Component } from 'react';
import Dialogs from './Dialogs';
import {compose} from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import
    {sendMessageActionCreator,
    addDialogActionCreator,} from '../../redux/dialogs-reducer.js';

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newDialogText: state.dialogsPage.newDialogText,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            addDialog: addDialogActionCreator,
            sendMessage: sendMessageActionCreator,
        }),
        withAuthRedirect
)(Dialogs)



// const mapDispatchToProps = (dispatch) => {
//     return {
//         addDialog: (dialogTitle) => {
//             dispatch(addDialogActionCreator(dialogTitle));
//         },
//         dialogChange: (updDialogTitle) => {
//             dispatch(updDialogChangeActionCreator(updDialogTitle));
//         },
//         sendMessage: (messageText) => {
//             dispatch(sendMessageActionCreator(messageText));
//         },
//         updateMessage: (newMessage) => {
//             dispatch(updateMessageActionCreator(newMessage));
//         }
//     }
// }
