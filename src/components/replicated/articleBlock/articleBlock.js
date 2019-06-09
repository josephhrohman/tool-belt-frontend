import React from 'react';
import { Link } from 'react-router-dom';
import './articleBlock.css'

function ArticleBlock() {

  const data = {
    image_url : "https://images-na.ssl-images-amazon.com/images/I/61dPKONTxQL._SY450_.jpg",
    title: "Drills",
    description: "You use these to drill, screw, bore, and",
    user_id: "555",
    tool_id: "444",
    _id: "123"
  };

  return(
    <div className="block-body">
      <img src={data.image_url} alt="Block Img" className="block-img"/>
      <p className="block-title">{data.title}</p>
      <p className="block-text">{data.creation_date}</p>
      <Link className="nav-link" to='/projects'>See More</Link>
    </div>
    // <div className="profile-block">
    //   <img src={userProject.image_url} alt="Profile Block Component" className="profile-block-img"/>
    //   <p className="profile-text">{userProject.title}</p>
    //   <p className="profile-text">{userProject.description}</p>
    //   <p className="profile-text">{userProject.user_id ? userProject.user_id.name : null}</p>
    //   <p className="profile-text">{userProject.tool_id}</p>
    //   <p className="profile-text">{userProject.creation_date}</p>
    // </div>
  )
}

export default ArticleBlock;
