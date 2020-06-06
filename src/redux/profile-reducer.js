const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initState = {
    postTextData: [
        {id: 1, text:'first message', likeCount: 1 },
        {id: 2, text:'second message', likeCount: 4 },
        {id: 3, text:'terth mesddfsage', likeCount: 3 },
    ],
    newPostText: 'ggg',
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 4,
                text: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postTextData: [ ...state.postTextData, newPost],
                newPostText: '',
            }
            }
        case UPDATE_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: return state;
    }
}

export let addPostActionCreator = ()=>({type:ADD_POST});
export let updatePostTextActionCreator = (newText)=>({type: UPDATE_POST_TEXT, newText:newText});

export default profileReducer;