import React from 'react';
import { Link } from 'react-router-dom';
import './articleBlock.css'

function ArticleBlock({data}) {

  // const data = {
  //   image_url : "https://images-na.ssl-images-amazon.com/images/I/61dPKONTxQL._SY450_.jpg",
  //   title: "Drills",
  //   description: "You use these to drill, screw, bore, and",
  //   user_id: "555",
  //   tool_id: "444",
  //   _id: "123"
  // };

  return(
    <div className="block-body">
      <img src={data.image_url} alt="Block Img" className="block-img"/>
      <p className="block-title">{data.title}</p>
      <p className="block-text">{data.creation_date}</p>
      <Link className="nav-link" to='/projects'>See More</Link>
    </div>
  )
}

export default ArticleBlock;
