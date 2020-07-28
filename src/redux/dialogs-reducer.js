const SEND_MESSAGE = 'SEND-MESSAGE';
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
}

const dialogsReducer = (state = initState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMesasge = { 
                id:4,
                text: action.messageText,
                sender: 'me'
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMesasge],
            }
            }
        case ADD_DIALOG:{
            let newDialog ={
                id: 7,
                name: action.dialogTitle,
            }
            return {
                ...state,
                dialogsData: [...state.dialogsData, newDialog],
            }
        }
        default: return state;

    }
}

export let sendMessageActionCreator = (messageText)=>({type:SEND_MESSAGE, messageText:messageText});
export let addDialogActionCreator = (dialogTitle)=>({type:ADD_DIALOG, dialogTitle });

export default dialogsReducer;