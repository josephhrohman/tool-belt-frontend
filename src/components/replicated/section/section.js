import React from 'react';
import List from '../list/list';
import './section.css';


function Section({data}) {

  const img_url = "https://www.fcimag.com/ext/resources/FCI/2018/10/Dewalt-XP-Hammers.jpg?1539706020";

  return(
    <div className="section-body">
      {/* <img className="section-img" src={data.image_url} alt="Spalsh Img" />
      <div className="article-body">
        <h1>{data.title}</h1>
        <hr/>
        <p className="description">{data.description}</p>
        <hr/>
        <p className="list-items">
          <ul>
            {data.list.content}
          </ul>
        </p>
      </div> */}
      <img className="section-img" src={img_url} alt="Spalsh Img" />
      <div className="article-body">
        <h1>Hammer</h1>
        <hr/>
        <p className="description">With this tool you will beat things into submission</p>
        <hr/>
        <p className="list-items">
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </p>
      </div>
    </div>
  )
}

export default Section;