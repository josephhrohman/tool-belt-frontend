import React from 'react';
import './toolBelt.css'

function ToolBelt({data, handleEdit, handleDelete}) {
  return(
    <div className="profile-tools-block">
      <img src={data.image_url} alt="Project Img" className="profile-tools-block-img"/>
      <p className="profile-tools-title">Title: {data.title}</p>
      <p className="profile-tools-text">Description: {data.description}</p>
      <p className="profile-tools-text">Ease of Use: {data.rating}</p>
      <div className="button-group">
        <button className="button">Edit</button>
        <button className="button">Delete</button>
      </div>
    </div>
  )
}

export default ToolBelt;
