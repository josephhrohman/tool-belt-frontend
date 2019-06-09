import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';
import './multiTool.css';

const Tools = () => {
  const [ allTools, setAllTools ] = useState([]);

  // const displayProjects = data => data
  //   .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
  //   .slice(0, 3)
  //   .map(project => <ArticleBlock data={project} key={project._id}/>);

  const displayTools = data => data
    .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
    .map(tool => <ArticleBlock data={tool} key={tool._id}/>);

  useEffect(() => {
    getTools();
  }, []);

  const getTools = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/tools`);
    console.table(response.data);
    setAllTools(response.data);
    console.table({allTools});
  }

  return (
    <>
      <div className= "projects-body">
        <img src="" alt="" />
        <h1>All Tools</h1>
        <div className="landing-top"> {allTools && displayTools(allTools)} </div>
      </div>
    </>
  )
}

export default Tools;