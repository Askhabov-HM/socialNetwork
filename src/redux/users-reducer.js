const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE'; 

let initState = {
    users: [
        {id:1, firstName:'ivanov', lastName:'Ivan', status:'fStatus', following: true, location:{cityName:'Minsk', national:'rus'}, logoImg:'https://i.stack.imgur.com/x8PhM.png'},
        {id:2, firstName:'kozlov', lastName:'Kozel', status:'sStatus', following: false, location:{cityName:'Moscow', national:'ukr'}, logoImg:'https://i.stack.imgur.com/x8PhM.png'},
        {id:3, firstName:'Ivov', lastName:'iva', status:'tStatus', following: true, location:{cityName:'Grodno', national:'brus'}, logoImg:'https://i.stack.imgur.com/x8PhM.png'},
    ]
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
                ...state, users: [...state, ...action.users]
            }
        }
        default: return state;
    }
}

export let followAC = (userID) => ({type:FOLLOW, userID});
export let unFollowAC = (userID) => ({type:UNFOLLOW, userID});
export let setStateAC = (users) => ({type:SET_STATE, users})

export default usersReducer;