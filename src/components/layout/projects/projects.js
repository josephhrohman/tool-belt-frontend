import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';
import './project.css';

const Projects = () => {
  const [ allProjects, setAllProjects ] = useState([]);

  const displayProjects = data => data.map(project => <ArticleBlock data={project} key={project._id}/>);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/projects`);
    console.table(response.data);
    setAllProjects(response.data);
    console.table({allProjects});
  }

  return(
    <>
      <div className= "projects-body">
        <img src="" alt="" />
        <h1>Top Projects</h1>
        <div className="landing-top"> {allProjects && displayProjects(allProjects)} </div>
      </div>
    </>
  )
}

export default Projects;