import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import LoginContainer from './components/Login/LoginContainer';

import CSS from './App.module.css';



function App(props) {
  return (
    <>
    <BrowserRouter>
      <div className={CSS.app_wrapper}>
        <HeaderContainer /> 
        <SideBar />
        <div className={CSS.app_wrapper_content}>
          <Route path='/profile' render={ () => <ProfileContainer />}/>
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/users' render={ () => <UsersContainer />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/login' render={ () => <LoginContainer />} />
        </div>
      </div>
      
      {/* {<Header></Header><SideBar></SideBar><Footer></Footer>} */}
    </BrowserRouter>
    </>
  );
}

export default App;
