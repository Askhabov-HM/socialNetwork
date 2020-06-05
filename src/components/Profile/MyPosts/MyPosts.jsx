import React, { Component } from 'react';
import Post from './Post/Post'

import CSS from './MyPosts.module.css';



const MyPosts = (props) => {
  let postGenerate = props.posts.map(p => <Post key={p.id} message={p.text} likes={p.likeCount} />);

  let addPostBtnRef = React.createRef();

  let addPostBtn = () => {
    props.addPost();
  }; // ФИЯ ДОБАВЛЯЕТ ПОСТ ПРИ КЛИКЕ НА BTN ADDPOST

  let textAreaChange = () => {
    let newText = addPostBtnRef.current.value;
    props.updatePostText(newText);
  };

  return (
    <div className={CSS.postBlock}>
      <h3>MyPosts</h3>
      <textarea onChange={textAreaChange} ref={addPostBtnRef} value={props.newPostText} ></textarea>
      <div>
        <button className={CSS.add_Btn} onClick={addPostBtn}>Add Post</button>
        <button>Delete Post</button>
      </div>
      {postGenerate}
    </div>
  );
}

export default MyPosts;