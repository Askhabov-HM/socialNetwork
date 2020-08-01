import React, {Component} from 'react';
import {BrowserRouter,Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import { initApp } from './redux/app-reducer';
import { withAuthRedirect } from './hoc/withAuthRedirect'


import CSS from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import LoginContainer from './components/Login/LoginContainer';
import Loader from './components/Loader/Loader';
import { compose } from 'redux';





class App extends Component {

  componentDidMount(){
    this.props.initApp();
    console.log(this.props.initApp())
    
  }
  
  render() {
    if(!this.props.inicializate){
      console.log(this.props.inicializate)
      return <Loader/>  
    }

    return (
        <div className={CSS.app_wrapper}>
          <HeaderContainer /> 
          <SideBar />
          <div className={CSS.app_wrapper_content}>
            <Route path='/profile/:userId' render={ () => <ProfileContainer />}/>
            <Route path='/dialogs' render={ () => <DialogsContainer />} />
            <Route path='/users' render={ () => <UsersContainer />} />
            <Route path='/news' render={ () => <News />} />
            <Route path='/settings' render={ () => <Settings />} />
            <Route path='/login' render={ () => <LoginContainer />} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    inicializate: state.app.inicializate,
})


export default compose(
  withRouter,
  connect( mapStateToProps, {initApp} )
)(App);

