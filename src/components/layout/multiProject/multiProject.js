import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';
import './multiProject.css';

const Projects = () => {
  const [ allProjects, setAllProjects ] = useState([]);

  // const displayProjects = data => data
  //   .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
  //   .slice(0, 3)
  //   .map(project => <ArticleBlock data={project} key={project._id}/>);

  const displayProjects = data => data
    .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
    .map(project => <ArticleBlock data={project} key={project._id}/>);

  useEffect(() => {
    console.table(allProjects);
    getProjects();
    console.table(allProjects);
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
        <h1>All Projects</h1>
        <div className="landing-top"> {allProjects && displayProjects(allProjects)} </div>
      </div>
    </>
  )
}

export default Projects;