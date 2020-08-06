import React, {Component} from 'react';
import CSS from './Post.module.css';

const Post = ({message, likes, ...restProps}) => {
    return (
      <div className={CSS.item}>
        {message}<br/>
        <span>likes {likes}</span>
      </div>
    );
}

export default Post;