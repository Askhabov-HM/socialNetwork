const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const ADD_DIALOG = 'ADD-DIALOG';

let initState = {
    dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Brat'},
        {id: 4, name: 'Sestra'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Natasha'}
    ],
    messagesData: [
        {id: 1, text: '1', sender: 'me'},
        {id: 2, text: '2', sender: 'they'},
        {id: 3, text: '3', sender: 'me'}
    ],
    newMessageText: 'ssss',
}

const dialogsReducer = (state = initState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMesasge = { 
                id:4,
                text: action.messageText,
                sender: 'me'
            }
            state.messagesData.push(newMesasge);
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
        case ADD_DIALOG:
            let newDialog ={
                id: 7,
                name: action.dialogTitle,
            }
            state.dialogsData.push(newDialog);
            return state;
        default: return state;

    }
}

export let sendMessageActionCreator = (messageText)=>({type:SEND_MESSAGE, messageText:messageText});
export let updateMessageActionCreator = (newMessageText)=>({type:UPDATE_MESSAGE, newMessageText:newMessageText});
export let addDialogActionCreator = (dialogTitle)=>({type:ADD_DIALOG, dialogTitle:dialogTitle });

export default dialogsReducer;