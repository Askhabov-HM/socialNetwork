import {usersAPI, profileAPI} from './../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE_PHOTO = 'SET-PROFILE-PHOTO';
const SET_USER_NAME = 'SET-USER-NAME';
const SET_STATUS = 'SET-STATUS';

let initState = {
    postTextData: [
        {id: 1, text:'first message', likeCount: 1 },
        {id: 2, text:'second message', likeCount: 4 },
        {id: 3, text:'terth mesddfsage', likeCount: 3 },
    ],
    newPostText: 'ggg',
    profilePhoto: null,
    userName: null,
    status:'----'
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
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
}

export let addPostActionCreator = ()=>({type:ADD_POST});
export let updatePostTextActionCreator = (newText)=>({ type: UPDATE_POST_TEXT, newText:newText });
export let setProfilePhotoAC = (profilePhoto) => ({ type:SET_PROFILE_PHOTO, profilePhoto });
export let setUserNameAC = (userName) => ({ type:SET_USER_NAME, userName });
export const setUserStatus = (status) => ({ type:SET_STATUS, status})

export let getProfilePhotoAC = (userId) => (dispatch) => {
    usersAPI.setProfileDataAPI(userId)
        .then(
            data => {
                dispatch(setProfilePhotoAC(data));
                dispatch(setUserNameAC(data));
            }
    );
}

export let getUserStatusThunk = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
    .then(
        response => {
            dispatch(setUserStatus(response.data))
        }
    )
}

export let updateUserStatusThunk = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
    .then(
        response => {
            // debugger;
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        }
    )
} 



export default profileReducer;