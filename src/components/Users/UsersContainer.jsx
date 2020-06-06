
import { connect } from 'react-redux';
import Users from './Users.jsx'

import {followAC, unFollowAC, setStateAC} from './../../redux/users-reducer'

const mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userID)=>{
            dispatch(followAC(userID));
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID));
        },
        setState: (users) => {
            dispatch(setStateAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
