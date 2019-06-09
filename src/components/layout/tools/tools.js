import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Section from '../../replicated/section/section';
import './tools.css';

//{ match, deletePost, currentUser }

const Tools = () => {
  // const [ error, setError ] = useState(null),
  //       // [ user, setUser ] = useState({}),
  //       [ userInfo, setUserInfo ] = useState({}),
  //       [ toolBelt, setToolBelt ] = useState([]),
  //       [ userProjects, setUserProjects ] = useState([]),
  //       [ tools, setTools ] = useState([]);

  // const displayUserInfo = userInfo => <ProfileInfo userInfo={userInfo}/>;
  // const displayToolBelt = toolBelt => toolBelt.map(tool => <ToolBelt toolBelt={tool} key={tool._id}/>);
  // const displayProjects = userProjects => userProjects.map(project => <ProfileProjects userProject={project} key={project._id}/>);
  // const displayTools    = tools => tools.map(tool => <ProfileTools tools={tool} key={tool._id}/>);
  
  // useEffect(() => {
  //   getProfile();
  //   getToolBelt();
  //   getProjects();
  //   getTools();
  // }, []);

  // const getProfile = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:4000/api/v1/users/${localStorage.currentUser}`);
  //     console.table(response.data.user);
  //     setUserInfo(response.data.user);
  //   } catch(err) {
  //     console.log(err);
  //     setError(err.response.data.error);
  //   };
  // }
  
  // const getToolBelt = async () => {
  //   const response = await axios.get(`http://localhost:4000/api/v1/tools`);
  //   console.table(response.data);
  //   setToolBelt(response.data);
  //   console.table({tools});
  // }

  // const getProjects = async () => {
  //   const response = await axios.get(`http://localhost:4000/api/v1/projects`);
  //   console.table(response.data);
  //   setUserProjects(response.data);
  //   console.table({userProjects});
  // }

  // const getTools = async () => {
  //   const response = await axios.get(`http://localhost:4000/api/v1/tools`);
  //   console.table(response.data);
  //   setTools(response.data);
  //   console.table({tools});
  // }


  return(
    <>
      <Section />
    </>
  )
}

export default Tools;
