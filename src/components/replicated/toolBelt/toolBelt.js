import React from 'react';
import './toolBelt.css'

function ToolBelt({data, handleEdit, handleDelete}) {
  return(
    <div className="profile-tools-block">
      <img src={data.image_url} alt="Project Img" className="profile-tools-block-img"/>
      <p className="profile-tools-title">{data.title}</p>
      <p className="profile-tools-text">{data.description}</p>
      <p className="profile-tools-text">{data.user_id ? data.user_id.name : null}</p>
      <div className="button-group">
        <button className="button">Edit</button>
        <button className="button">Delete</button>
      </div>
    </div>
  )
}

export default ToolBelt;
