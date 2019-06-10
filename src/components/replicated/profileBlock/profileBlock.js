import React from 'react';
import axios from 'axios';
import './profileBlock.css'

const ProfileBlock = ({ data }) => {
  
  const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:4000/api/v1/${data.category}s/${data._id}`);
        console.table(response.data);
  }
  
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
