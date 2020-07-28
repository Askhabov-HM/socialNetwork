import React, { Component } from 'react';

import ProfileStatus from './ProfileStatus';
import CSS from './ProfileInfo.module.css';

import Loader from './../../Loader/Loader'

const ProfileInfo = (props) => {
  console.log(props)
  if(!props.profile ){
    return <Loader />
  }
  if(!props.profileUserName){
    return <Loader />
  }
  console.log(props.profile);
  return (
    <div>
      {/* <div>
        <img className={CSS.profileBg} src="https://www.publicdomainpictures.net/pictures/270000/velka/sunset-picture.jpg" alt="" />
      </div> */}
      <div className={CSS.profileDescrBlock}>
        <img className={CSS.avatar} src={props.profile.photos.large !=null 
            ? props.profile.photos.large
            : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"} alt="" />
        <br/> 
        {props.profileUserName.fullName}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;

// "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"