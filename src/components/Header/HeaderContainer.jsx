import React from 'react';
import {connect} from 'react-redux';

import {getAuthData, logout} from '../../redux/auth-reducer'; 

import Header from './Header';

class HeaderContainer extends React.Component {
    

    render() {
        return(
            <>
                <Header {...this.props}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login, 
    }
}

export default connect (mapStateToProps,{getAuthData, logout})(HeaderContainer);