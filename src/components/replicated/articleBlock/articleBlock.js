import React from 'react';
import { Link } from 'react-router-dom';
import './articleBlock.css'

const ArticleBlock = ({data}) => {

  return(
    // <Link className="block-body" to={'/' + data.category + '/' + data._id}>
    <Link className="block-body" to='/projects/project'>
      <img src={data.image_url} alt="Block Img" className="block-img"/>
      <p className="block-title">{data.title}</p>
      <p className="block-title">{data.creation_date}</p>
    </Link>
  )
}

export default ArticleBlock;
