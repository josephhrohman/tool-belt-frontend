import React from 'react';
import './profileBlock.css'

function ProfileBlock({data}) {
  return(
    <div className="profile-block">
      <img className="profile-block-img" src={data.image_url} alt="Profile Block Component" />
      <p className="profile-block-title">{data.title}</p>
      <p className="profile-block-text">{data.description}</p>
      <p className="profile-block-text">{data.user_id ? data.user_id.name : null}</p>
      <p className="profile-block-text">{data.tool_id}</p>
      <p className="profile-block-text">{data.creation_date}</p>
    </div>
  )
}

export default ProfileBlock;
