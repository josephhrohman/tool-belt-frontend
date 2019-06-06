import React from 'react';
import ProfileBlock from '../profileBlock/profileBlock.js';
import './profile.css';

const Profile = () => {

  return(
    <>
      <div className="profile-section">
        <div className="user-block">
          <p className="user-info">User Name</p>
          <p className="user-info">Email</p>
          <p className="user-info">Date Joined</p>
        </div>
        <img src="#" alt="Profile" className="user-pic" />
      </div>
      <div className="profile-section">
        {/* <p className="sample-block">ToolBelt</p>  */}
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
      </div>
      <div className="profile-section">
        {/* <p className="sample-block">User Projects</p>  */}
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
      </div>
      <div className="profile-section">
        {/* <p className="sample-block">User Tools</p> */}
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
        <ProfileBlock />
      </div>
    </>
  )
}

export default Profile;
