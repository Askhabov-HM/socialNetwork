import {getAuthData} from '../redux/auth-reducer';

const INIT_SUCCESS = 'APP-INIT';

let initState = {
    inicializate: false
}

const appReducer = ( state = initState, action) => {
    switch(action.type){
        case INIT_SUCCESS:{
            return{
                ...state,
                inicializate: true
            }
        }
        default: return state;
    }
}

export const initSuccess = () => ({type: INIT_SUCCESS});

export let  initApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());

    Promise.all([promise]).then( () => {
            dispatch(initSuccess());
        });
}



export default appReducer;