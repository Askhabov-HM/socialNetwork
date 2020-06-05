import React, { Component } from 'react';

import MyPosts from './MyPosts';
import {addPostActionCreator, updatePostTextActionCreator} from './../../../redux/profile-reducer.js';



const MyPostsContainer = (props) => {
  // console.log(props.store);
  console.log(props.state);


  let state = props.store.getState();
  

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }; // ФИЯ ДОБАВЛЯЕТ ПОСТ ПРИ КЛИКЕ НА BTN ADDPOST
  
  let textArea = (newText) => {
    props.store.dispatch(updatePostTextActionCreator(newText));
  };

  
  return (
    <MyPosts 
        addPost={addPost} 
        updatePostText={textArea} 
        posts={state.profilePage.postTextData}  
        newPostText={state.profilePage.newPostText}  />
  );
}

export default MyPostsContainer;