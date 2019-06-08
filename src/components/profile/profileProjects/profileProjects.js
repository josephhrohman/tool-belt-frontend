import React from 'react';
import './profileProjects.css'

function ProfileProjects({userProject}) {
  return(
    <div className="profile-block">
      <img src={userProject.image_url} alt="Profile Block Component" className="profile-block-img"/>
      <p className="profile-text">{userProject.title}</p>
      <p className="profile-text">{userProject.description}</p>
      <p className="profile-text">{userProject.user_id ? userProject.user_id.name : null}</p>
      <p className="profile-text">{userProject.tool_id}</p>
      <p className="profile-text">{userProject.creation_date}</p>
    </div>
  )
}

export default ProfileProjects;
