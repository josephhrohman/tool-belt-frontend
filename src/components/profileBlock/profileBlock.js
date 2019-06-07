import React from 'react';
import './profileBlock.css'

function ProfileBlock({data}) {
  return(
    <div className="profile-block">
      <img src="#" alt="Profile Block Component" className="profile-block-img"/>
      <p className="profile-text">{data.name}</p>
      <p className="profile-text">{data.aksdhf}</p>
      <p className="profile-text">{data.asdkhf}</p>
    </div>
  )
}

export default ProfileBlock;