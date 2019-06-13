import React, { useEffect, useState } from 'react';
import ProfileBlock from '../../replicated/profileBlock/profileBlock';
import ToolBelt from '../../replicated/toolBelt/toolBelt';
import axios from 'axios';
import './profile.css';

const Profile = ({ currentUser }) => {
  const [ error, setError ] = useState(null),
        [ userInfo, setUserInfo ] = useState({}),
        [ toolBelt, setToolBelt ] = useState([]),
        [ userProjects, setUserProjects ] = useState([]),
        [ tools, setTools ] = useState([]);

  const displayToolBelt = data => data
        .filter(data => data.user == currentUser)
        .map(tool => <ToolBelt data={tool} key={tool._id}/>);

  const displayProjects = data => data
        .filter(data => data.user == currentUser)
        .map(project => <ProfileBlock data={project} key={project._id}/>);

  const displayTools    = data => data
        .map(tool => <ProfileBlock data={tool} key={tool._id}/>);

  useEffect(() => {
        getProfile();
        getToolBelt();
        getProjects();
        getTools();
  }, []);
  
  const getProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/v1/users/${localStorage.currentUser}`);
          setUserInfo(response.data.user);
        } catch(err) {
          setError(err.response.data.error);
          console.log(error ? error : null);
        };
  }
  
  const getToolBelt = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/tools`);
        setToolBelt(response.data);
  }

  const getProjects = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/projects`);
        setUserProjects(response.data);
  }
  
  const getTools = async () => {
        const response = await axios.get(`http://localhost:4000/api/v1/tools`);
        setTools(response.data);
  }

  return(
    <>
      <div className="user-info-block">
        <div className="user-block">
          <p className="user-info">name: {userInfo.name}</p>
          <p className="user-info">email: {userInfo.email}</p>
          <p className="user-info">sign up date: {userInfo.sign_up_date}</p>
        </div>
        <img src={userInfo.image_url || "../images/tbLogo.png"} alt="Project Img" className="user-img"/>
      </div>
      <hr />
        <h1 className="rotate">My ToolBelt</h1>
      <div className='profile-section'>
        {toolBelt && displayToolBelt(toolBelt)}
      </div>
      <hr />
        <h1 className="rotate">My Projects</h1>
      <div className='profile-section'>
        {userProjects && displayProjects(userProjects)}
      </div>
      <hr />
        <h1 className="rotate">My Tools</h1>
      <div className='profile-section'>
        {tools && displayTools(tools)}
      </div>
      <hr />
    </>
  )
}

export default Profile;
