const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE'; 

let initState = {
    users: [
        
    ],
    totalCount: 0,
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
                ...state, users: [...state.users, ...action.users]
            }
            
        }
        default: return state;
    }
}

export let followAC = (userID) => ({type:FOLLOW, userID});
export let unFollowAC = (userID) => ({type:UNFOLLOW, userID});
export let setStateAC = (users) => ({type:SET_STATE, users})

export default usersReducer;