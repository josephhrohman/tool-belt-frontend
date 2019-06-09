import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleBlock from '../../replicated/articleBlock/articleBlock';
import CreateItem from '../../replicated/createItem/createItem';
import './multiTool.css';

const Tools = ({ currentUser }) => {
  const [ allTools, setAllTools ] = useState([]),
        [ toggleA, setToggleA ] = useState(false);

  const toggleAdd = async (e) => {(toggleA ? setToggleA(false) : setToggleA(true))};
  
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
      <div className= "all-tools-body">
        <h1>All Tools</h1>
        <div className="filter-tools-block">
          <div className="filter-tools-list">
            <li>Cutting</li>
            <li>Drilling</li>
            <li>Boring</li>
            <li>Screwing</li>
            <li>Soldering</li>
            <li>Sanding</li>
          </div>
          {currentUser ? <Link className="add-tool-button" to='/tools/newTool'>Add a Tool</Link> : null}
          {toggleA ? <CreateItem /> : null }
        </div>
        <div className="all-tools-container"> {allTools && displayTools(allTools)} </div>
      </div>
    </>
  )
}

export default Tools;
