import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Footer from '../footer/footer';
import './landingPage.css';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';

const Landing = () => {
  const [ allProjects, setAllProjects ] = useState([]),
        [ allTools, setAllTools ] = useState([]);

  const displayProjects = data => data.map(project => <ArticleBlock data={project} key={project._id}/>);
  const displayTools    = data => data.map(tool => <ArticleBlock data={tool} key={tool._id}/>);

  useEffect(() => {
    getProjects();
    getTools();
  }, []);

  const getProjects = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/projects`);
    console.table(response.data);
    setAllProjects(response.data);
    console.table({allProjects});
  }

  const getTools = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/tools`);
    console.table(response.data);
    setAllTools(response.data);
    console.table({allTools});
  }

  return(
    <>
      <div className= "landing">
        <img src="" alt="" />
        <h1>Top Projects</h1>
        <div className="landing-top"> {allProjects && displayProjects(allProjects)} </div>
        <h1>Top Tools</h1>
        <div className="landing-top"> {allTools && displayTools(allTools)} </div>
      </div>
      <Footer />
    </>
  )
}

export default Landing;