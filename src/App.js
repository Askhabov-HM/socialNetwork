import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';

import CSS from './App.module.css';

function App(props) {
  return (
    <>
    <BrowserRouter>
      <div className={CSS.app_wrapper}>
        <Header /> 
        <SideBar />
        <div className={CSS.app_wrapper_content}>
          <Route path='/profile' render={ () =>
              <Profile store={props.store} state={props.state} />}/>
          <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
      </div>
      
      {/* {<Header></Header><SideBar></SideBar><Footer></Footer>} */}
    </BrowserRouter>
    </>
  );
}

export default App;
