import React, { Component } from 'react';

import ProfileStatusWithHook from './ProfileStatusWithHook';
import CSS from './ProfileInfo.module.css';
import Loader from './../../Loader/Loader'

const ProfileInfo = ({profile, profileUserName, status, updateStatus, ...restProps}) => {
  if(!profile ){
    return <Loader />
  }
  if(!profileUserName){
    return <Loader />
  }
  return (
    <div>
      <div className={CSS.profileDescrBlock}>
        <img className={CSS.avatar} src={profile.photos.large !=null 
            ? profile.photos.large
            : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"} alt="" />
        <br/> 
        {profileUserName.fullName}
        <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;

// "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"