import React from 'react';
import './profileInfo.css'

function ProfileInfo({userInfo}) {
  return(
    <div className="profile-block">
      {/* <div className="user-block">
        <p className="user-info">{data.name}</p>
        <p className="user-info">{data.email}</p>
        <p className="user-info">{data.sign_up_date}</p>
      </div>
      <img src={data.image_url} alt="Project Img" className="profile-block-img"/> */}
      <div className="user-block">
        <p className="user-info">name: {userInfo.name}</p>
        <p className="user-info">email: {userInfo.email}</p>
        <p className="user-info">sign up date: {userInfo.sign_up_date}</p>
      </div>
      <img src={userInfo.image_url} alt="Project Img" className="profile-block-img"/>
    </div>
  )
}

export default ProfileInfo;