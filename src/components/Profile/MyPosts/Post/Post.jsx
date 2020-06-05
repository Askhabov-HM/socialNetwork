import React, {Component} from 'react';
import CSS from './Post.module.css';

const Post = (props) => {
    return (
      <div className={CSS.item}>
        {props.message}<br/>
        <span>likes {props.likes}</span>
      </div>
    );
}

export default Post;