import {authAPI} from './../api/api.js';

const SET_AUTH_DATA = 'SET-AUTH-DATA'


let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    loading: false
}

const authReducer = ( state = initState, action) => {
    switch (action.type){
        case SET_AUTH_DATA:{
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state;
    }
}

export let setAuthData = (userId, email, login) => ({ type:SET_AUTH_DATA, data: {userId, email, login}});
export let getAuthData = () => (dispatch) => {
    authAPI.setAuth()
        .then( data => {
               if (data.resultCode === 0){
                    let {id, email, login} =  data.data;
                    dispatch(setAuthData(id, email, login));
               } 
            }
        );
};

export default authReducer;