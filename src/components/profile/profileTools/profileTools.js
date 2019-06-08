import React from 'react';
import './profileTools.css'

function ProfileTools({tools}) {
  return(
    <div className="profile-block">
      <img src={tools.image_url} alt="Project Img" className="profile-block-img"/>
      <p className="profile-text">{tools.title}</p>
      <p className="profile-text">{tools.description}</p>
      <p className="profile-text">{tools.user_id ? tools.user_id.name : null}</p>
      
    </div>
  )
}

export default ProfileTools;
