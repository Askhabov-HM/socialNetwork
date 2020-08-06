import React, { Component } from 'react';

import Post from './Post/Post'
import AddNewPost from '../AddNewPostForm/AddNewPostForm';

import CSS from './MyPosts.module.css';



const MyPosts = ({ posts, addPost, updatePostText, ...restProps}) => {
  let postGenerate = posts.map(p => <Post key={p.id} message={p.text} likes={p.likeCount} />);

  let addPostBtn = () => {
    addPost();
  }; 

  let textAreaChange = (postText) => {
    updatePostText(postText.addNewPost);
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