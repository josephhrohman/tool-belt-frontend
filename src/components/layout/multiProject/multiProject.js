import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';
import './multiProject.css';

const Projects = ({ currentUser }) => {
  const [ allProjects, setAllProjects ] = useState([]);

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
      <div className= "all-projects-body">
        <h1>All Projects</h1>
        <div className="filter-projects-block">
          <div className="filter-projects-list">
            <li>Woodworking</li>
            <li>Metalworking</li>
            <li>Home Improvement</li>
            <li>Cars</li>
            <li>Plumbing</li>
            <li>Electrical</li>
          </div>
          {currentUser ? <Link className="add-project-button" to='/projects/newProject'>Add a Project</Link> : null}
        </div>
        <div className="all-projects-container"> {allProjects && displayProjects(allProjects)} </div>
      </div>
    </>
  )
}

export default Projects;