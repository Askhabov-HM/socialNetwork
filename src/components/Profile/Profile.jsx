import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

import { Redirect } from 'react-router-dom';  


const Profile = (props) => {

  return (
    <>
      <div>
        <ProfileInfo profile={props.photo} profileUserName={props.profileUserName}/>
        <MyPostsContainer/>
      </div>
    </>
  );
}

export default Profile;