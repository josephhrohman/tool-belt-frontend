import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './landingPage.css';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';

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
      <div className= "landing">
        <img src="" alt="" />
        <h1>Top Projects</h1>
        <div className="landing-top">
          {topProjects && displayProjects(topProjects)}
          <Link className="all-block" to='/projects'>All Projects</Link>
        </div>
        <h1>Top Tools</h1>
        <div className="landing-top">{topTools && displayTools(topTools)}
          <Link className="all-block" to='/tools'>All Tools
          </Link>
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