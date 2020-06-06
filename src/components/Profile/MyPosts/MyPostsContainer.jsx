import React, { Component } from 'react';

import MyPosts from './MyPosts';
import {addPostActionCreator, updatePostTextActionCreator} from './../../../redux/profile-reducer.js';

import {connect} from 'react-redux';




const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postTextData,
    newPostText: state.profilePage.newPostText,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: ()=> {
      dispatch(addPostActionCreator());
    },
    updatePostText: (newText)=> {
      dispatch(updatePostTextActionCreator(newText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;