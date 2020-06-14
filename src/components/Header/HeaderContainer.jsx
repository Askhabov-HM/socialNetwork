import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

import {setAuthData} from '../../redux/auth-reducer'; 

import Header from './Header';
import { setAuth } from '../../api/api';


class HeaderContainer extends React.Component {
    componentDidMount(){
        setAuth()
        .then( data => {
               if (data.resultCode === 0){
                    let {id, email, login} =  data.data;
                    this.props.setAuthData(id, email, login)
               } 
            }
        );
    }

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

export default connect (mapStateToProps,{setAuthData})(HeaderContainer);