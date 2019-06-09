import React from 'react';
import './profileTools.css'

function ProfileTools({data}) {
  return(
    <div className="profile-tools-block">
      <img src={data.image_url} alt="Project Img" className="profile-tools-block-img"/>
      <p className="profile-tools-title">{data.title}</p>
      <p className="profile-tools-text">{data.description}</p>
      <p className="profile-tools-text">{data.user_id ? data.user_id.name : null}</p>
    </div>
  )
}

export default ProfileTools;
