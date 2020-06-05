import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

import store from './redux/redux-store.js';


export let renderDOMFunc = (state)=> {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderDOMFunc(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  console.log(state);
  renderDOMFunc(state);
}); // подпись на изменения


