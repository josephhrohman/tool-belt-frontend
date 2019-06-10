import React from 'react';
import './profileBlock.css'

function ProfileBlock({data, handleEdit, handleDelete}) {
  
  return(
    <div className="profile-block">
      <img className="profile-block-img" src={data.image_url} alt="Profile Block Component" />
      <p className="profile-block-title">Title: {data.title}</p>
      <p className="profile-block-text">Description: {data.description}</p>
      <p className="profile-block-text">Tool: {data.tool_id}</p>
      <div className="button-group">
        <button className="button">Edit</button>
        <button className="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default ProfileBlock;
