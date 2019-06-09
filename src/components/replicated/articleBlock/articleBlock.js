import React from 'react';
import { Link } from 'react-router-dom';
import './articleBlock.css'

function ArticleBlock({data}) {

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
