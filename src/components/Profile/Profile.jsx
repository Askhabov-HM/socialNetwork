import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';



const Profile = (props) => {
  return (
    
    <>
      <div>
        <ProfileInfo />
        <MyPostsContainer store={props.store} state={props.state}/>
      </div>
    </>
  );
}

export default Profile;