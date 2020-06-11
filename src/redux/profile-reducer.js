const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE_PHOTO = 'SET-PROFILE-PHOTO';
const SET_USER_NAME = 'SET-USER-NAME';

let initState = {
    postTextData: [
        {id: 1, text:'first message', likeCount: 1 },
        {id: 2, text:'second message', likeCount: 4 },
        {id: 3, text:'terth mesddfsage', likeCount: 3 },
    ],
    newPostText: 'ggg',
    profilePhoto: null,
    userName: null,
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
        case SET_PROFILE_PHOTO:{
            return {
                ...state,
                profilePhoto: action.profilePhoto
            }
        }
        case SET_USER_NAME:{
            return {
                ...state,
                userName: action.userName
            }
        }
        default: return state;
    }
}

export let addPostActionCreator = ()=>({type:ADD_POST});
export let updatePostTextActionCreator = (newText)=>({ type: UPDATE_POST_TEXT, newText:newText });
export let setProfilePhotoAC = (profilePhoto) => ({ type:SET_PROFILE_PHOTO, profilePhoto });
export let setUserNameAC = (userName) => ({ type:SET_USER_NAME, userName });

export default profileReducer;