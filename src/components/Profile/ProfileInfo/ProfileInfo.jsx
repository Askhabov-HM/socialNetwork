import React, { Component } from 'react';


import CSS from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={CSS.profileBg} src="https://www.publicdomainpictures.net/pictures/270000/velka/sunset-picture.jpg" alt="" />
      </div>
      <div className={CSS.profileDescrBlock}>
        <img className={CSS.avatar} src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg" alt="" />
        <br/>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;