import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './landingPage.css';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';
import LandingCarousel from './landingCarousel/landingCarousel';

const Landing = () => {
  const [ topProjects, setTopProjects ] = useState([]),
        [ topTools, setTopTools ] = useState([]
  );

  const displayProjects = data => data
    .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
    .slice(0, 3)
    .map(project => <ArticleBlock data={project} key={project._id}/>
  );

  const displayTools = data => data
    .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
    .slice(0, 3)
    .map(tool => <ArticleBlock data={tool} key={tool._id}/>
  );

  const getProjects = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/projects`);
    console.table(response.data);
    setTopProjects(response.data);
    console.table({topProjects});
  };
    
  const getTools = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/tools`);
    console.table(response.data);
    setTopTools(response.data);
    console.table({topTools});
  };
  
  useEffect(() => {
    getProjects();
    getTools();
  }, []);
  
  return(
    <>
      <img className="landing-icon" src="../images/tbLogo.png" alt="Landing Page Logo" />
      <div className= "landing-body">
        <LandingCarousel />
        <div className="landing-top">
          <h1>Trending Projects</h1>
          {topProjects && displayProjects(topProjects)}
          <Link className="all-block" to='/projects'>All Projects</Link>
        </div>
        <div className="landing-top">
          <h1>Trending Tools</h1>
          {topTools && displayTools(topTools)}
          <Link className="all-block" to='/tools'>All Tools</Link>
        </div>
        <div className="landing-cat">
          <h1>Categories</h1>
          <div className="landing-cat-list">
            <li>Woodworking</li>
            <li>Metalworking</li>
            <li>Home Improvement</li>
            <li>Cars</li>
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Cutting</li>
            <li>Drilling</li>
            <li>Boring</li>
            <li>Screwing</li>
            <li>Soldering</li>
            <li>Sanding</li>
          </div>
        </div>
        <div className="landing-articles">
          <ul>
            <h1>Artilce 1</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nostrum. Neque est ipsam facilis! Enim necessitatibus illum dolores eum, nisi voluptas beatae libero commodi temporibus ratione architecto qui, fugiat delectus.</p>
            <br/>
            <h1>Artilce 2</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nostrum. Neque est ipsam facilis! Enim necessitatibus illum dolores eum, nisi voluptas beatae libero commodi temporibus ratione architecto qui, fugiat delectus.</p>
            <br/>
            <h1>Artilce 3</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nostrum. Neque est ipsam facilis! Enim necessitatibus illum dolores eum, nisi voluptas beatae libero commodi temporibus ratione architecto qui, fugiat delectus.</p>
            <br/>
            <h1>Artilce 4</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nostrum. Neque est ipsam facilis! Enim necessitatibus illum dolores eum, nisi voluptas beatae libero commodi temporibus ratione architecto qui, fugiat delectus.</p>
            <br/>
            <h1>Artilce 5</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nostrum. Neque est ipsam facilis! Enim necessitatibus illum dolores eum, nisi voluptas beatae libero commodi temporibus ratione architecto qui, fugiat delectus.</p>
            <br/>
            <h1>Artilce 6</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nostrum. Neque est ipsam facilis! Enim necessitatibus illum dolores eum, nisi voluptas beatae libero commodi temporibus ratione architecto qui, fugiat delectus.</p>
            <br/>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Landing;