import React from 'react';
import './profileBlock.css'

function ProfileBlock({data}) {
  return(
    <div className="profile-block">
      <img className="profile-block-img" src={data.image_url} alt="Profile Block Component" />
      <p className="profile-block-title">Title: {data.title}</p>
      <p className="profile-block-text">Description: {data.description}</p>
      <p className="profile-block-text">User: {data.user_id ? data.user_id.name : null}</p>
      <p className="profile-block-text">Tool: {data.tool_id}</p>
      <p className="profile-block-text">Created: {data.creation_date}</p>
    </div>
  )
}

export default ProfileBlock;
