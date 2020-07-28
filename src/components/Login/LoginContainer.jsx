import React from 'react';
import {connect} from 'react-redux';

import Login from './Login';
import {login} from '../../redux/auth-reducer';

const matStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect ( matStateToProps ,{login})(Login);