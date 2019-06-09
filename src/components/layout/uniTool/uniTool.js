import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Section from '../../replicated/section/section';
import './uniTool.css';

const Tool = () => {
  // const [ allTools, setAllTools ] = useState([]);

  // const displayTools = data => data
  //   .sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date))
  //   .map(tool => <ArticleBlock data={tool} key={tool._id}/>);

  // useEffect(() => {
  //   getTools();
  // }, []);

  // const getTools = async () => {
  //   const response = await axios.get(`http://localhost:4000/api/v1/tools`);
  //   console.table(response.data);
  //   setAllTools(response.data);
  //   console.table({allTools});
  // }

  return (
    <>
      <Section />
    </>
  )
}

export default Tool;