const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE'; 
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const ITS_LOAD = 'ITS-LOAD';

let initState = {
    users: [
        
    ],
    pageSize:7,
    totalCount: 0,
    currentPage: 1,
    loading: false,
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
                            following: true,
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
                            following: false,
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
                ...state, loading: action.mean
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
export let loadingAC = (mean) => ({type:ITS_LOAD, mean});

export default usersReducer;