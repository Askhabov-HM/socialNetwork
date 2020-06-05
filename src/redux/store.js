import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


let store = {

    _state: {
        profilePage: {
            postTextData: [
                {id: 1, text:'first message', likeCount: 1 },
                {id: 2, text:'second message', likeCount: 4 },
                {id: 3, text:'terth mesddfsage', likeCount: 3 },
            ],
            newPostText: 'ggg',
        },
        dialogsPage: {
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
            newMessageText: 'ssddsfdfdsfdsfsss',
        },
    },

    _callSubscriber () {},

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    getState () {
        return this._state;
    },

    dispatch (action){
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

}


export default store;

// временно отключено