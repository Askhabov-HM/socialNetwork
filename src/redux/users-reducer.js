import {usersAPI} from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE'; 
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const ITS_LOAD = 'ITS-LOAD';
const TOGGLE_FOLLOWING = 'TOGGLE-FOLLOWING';

let initState = {
    users: [
        
    ],
    pageSize:7,
    totalCount: 0,
    currentPage: 1,
    loading: false,
    followingInProgress: [],
}

let usersReducer = ( state = initState, action)=> {
    switch (action.type){
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return {
                            ...u,
                            followed: true,
                        }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID){
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u 
                }),
            }
        }
        case SET_STATE:{
            return {
                ...state, users: action.users
            }
            
        }
        case SET_TOTAL_COUNT:{
            return {
                ...state, totalCount: action.totalCount
            }
        }
        case SET_PAGE:{
            return{
                ...state, currentPage: action.pageNumber
            }
        }
        case ITS_LOAD:{
            return{
                ...state, loading: action.itLoad
            }
        }
        case TOGGLE_FOLLOWING:{
            return{
                ...state,
                followingInProgress: action.itLoad
                ? [...state.followingInProgress, action.followUserId]
                : state.followingInProgress.filter( id => id !== action.followUserId)
            }
        }
        default: return state;
    }
}

export let followAC = (userID) => ({type:FOLLOW, userID});
export let unFollowAC = (userID) => ({type:UNFOLLOW, userID});
export let setStateAC = (users) => ({type:SET_STATE, users})
export let setCurrentPageAC = (pageNumber) => ({type:SET_PAGE, pageNumber});
export let setTotalCountAC = (total) => ({type:SET_TOTAL_COUNT, totalCount:total});
export let loadingAC = (itLoad) => ({type:ITS_LOAD, itLoad});
export let toggleFollowingAC = (itLoad, followUserId) => ({type:TOGGLE_FOLLOWING, itLoad, followUserId});


export let setUsersThunk = (pageNumber, pageSize) => (dispatch) =>{
    usersAPI.setUsers(pageNumber, pageSize).then(
        data => {
            dispatch(setStateAC(data.items));
            dispatch(setTotalCountAC(data.totalCount));

            if(!initState.loading){
                dispatch(loadingAC(true));
            }
            else {
                let load = setTimeout(loadingAC(false), 20000);
                dispatch(load);
            }
            
        }
    );
}

export let deleteFolowingThunk = (userId) => (dispatch) => {
    usersAPI.deleteFollowing(userId)
    .then(
        data => {
            if(data.resultCode === 0){
                dispatch(unFollowAC(userId));
            }
            dispatch(toggleFollowingAC(false, userId));
        }
    )
}

export let addFollowingThunk = (userId) => (dispatch) => {
    usersAPI.addFollowing(userId)
    .then(
        data => {
            if(data.resultCode === 0){
                dispatch(followAC(userId));
            }
            dispatch(toggleFollowingAC(false, userId));
        }
    );
}

export default usersReducer;