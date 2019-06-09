import React, { useEffect, useState } from 'react';
import ProfileBlock from '../../replicated/profileBlock/profileBlock';
import ProfileTools from './profileTools/profileTools';
import axios from 'axios';
import './profile.css';

//{ match, deletePost, currentUser }

const Profile = () => {
  const [ error, setError ] = useState(null),
        // [ user, setUser ] = useState({}),
        [ userInfo, setUserInfo ] = useState({}),
        [ toolBelt, setToolBelt ] = useState([]),
        [ userProjects, setUserProjects ] = useState([]),
        [ tools, setTools ] = useState([]);

  const displayToolBelt = data => data.map(tool => <ProfileBlock data={tool} key={tool._id}/>);
  const displayProjects = data => data.map(project => <ProfileBlock data={project} key={project._id}/>);
  const displayTools    = data => data.map(tool => <ProfileTools data={tool} key={tool._id}/>);

  useEffect(() => {
    getProfile();
    getToolBelt();
    getProjects();
    getTools();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/users/${localStorage.currentUser}`);
      console.table(response.data.user);
      setUserInfo(response.data.user);
    } catch(err) {
      console.log(err);
      setError(err.response.data.error);
    };
  }
  
  const getToolBelt = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/tools`);
    console.table(response.data);
    setToolBelt(response.data);
    console.log({tools});
  }

  const getProjects = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/projects`);
    console.table(response.data);
    setUserProjects(response.data);
    console.table({userProjects});
  }

  const getTools = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/tools`);
    console.table(response.data);
    setTools(response.data);
    console.table({tools});
  }


  return(
    <>
      <div className="profile-info-block">
        <div className="user-block">
          <p className="user-info">name: {userInfo.name}</p>
          <p className="user-info">email: {userInfo.email}</p>
          <p className="user-info">sign up date: {userInfo.sign_up_date}</p>
        </div>
        <img src={userInfo.image_url} alt="Project Img" className="profile-block-img"/>
      </div>
      <div className='profile-section'>
          {toolBelt && displayToolBelt(toolBelt)}
      </div>
      <div className='profile-section'>
          {userProjects && displayProjects(userProjects)}
      </div>
      <div className='profile-section'>
          {tools && displayTools(tools)}
      </div>
    </>
  )
}

export default Profile;
