import React from 'react';
import './profileTools.css'

function ProfileTools({data}) {
  return(
    <div className="profile-block">
      <img src={data.image_url} alt="Project Img" className="profile-block-img"/>
      <p className="profile-text">{data.title}</p>
      <p className="profile-text">{data.description}</p>
      <p className="profile-text">{data.user_id ? data.user_id.name : null}</p>
    </div>
  )
}

export default ProfileTools;
