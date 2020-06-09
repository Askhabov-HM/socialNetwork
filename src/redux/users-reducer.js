const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE'; 
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initState = {
    users: [
        
    ],
    pageSize:7,
    totalCount: 0,
    currentPage: 1,
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
        default: return state;
    }
}

export let followAC = (userID) => ({type:FOLLOW, userID});
export let unFollowAC = (userID) => ({type:UNFOLLOW, userID});
export let setStateAC = (users) => ({type:SET_STATE, users})
export let setCurrentPageAC = (pageNumber) => ({type:SET_PAGE, pageNumber});
export let setTotalCountAC = (total) => ({type:SET_TOTAL_COUNT, totalCount:total});

export default usersReducer;