import React, { Component } from 'react';

import Post from './Post/Post'
import AddNewPost from '../AddNewPostForm/AddNewPostForm';

import CSS from './MyPosts.module.css';



const MyPosts = (props) => {
  let postGenerate = props.posts.map(p => <Post key={p.id} message={p.text} likes={p.likeCount} />);

  let addPostBtn = () => {
    props.addPost();
  }; // ФИЯ ДОБАВЛЯЕТ ПОСТ ПРИ КЛИКЕ НА BTN ADDPOST

  let textAreaChange = (postText) => {
    props.updatePostText(postText.addNewPost);
  };

  return (
    <div className={CSS.postBlock}>
      <h3>MyPosts</h3>
      <AddNewPost onSubmit={addPostBtn} onChange={textAreaChange}/>
      {postGenerate}
    </div>
  );
}

export default MyPosts;