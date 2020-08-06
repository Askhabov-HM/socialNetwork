import React, { Component } from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = ({ photo, profileUserName, status, updateStatus, ...restProps}) => {

  return (
    <>
      <div>
        <ProfileInfo
                profile={photo}
                profileUserName={profileUserName}
                status={status}
                updateStatus={updateStatus}/>
        <MyPostsContainer/>
      </div>
    </>
  );
}

export default Profile;