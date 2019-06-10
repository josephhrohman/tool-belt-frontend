import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileBlock from '../../replicated/profileBlock/profileBlock';
import ToolBelt from '../../replicated/toolBelt/toolBelt';
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

  const displayToolBelt = data => data
        .map(tool => <ToolBelt data={tool} key={tool._id}/>);

  const displayProjects = data => data
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
          const response = await axios.get(`https://toolbelt-backend.herokuapp.com/api/v1/users/${localStorage.currentUser}`);
          console.table(response.data.user);
          setUserInfo(response.data.user);
        } catch(err) {
          console.log(err);
          setError(err.response.data.error);
        };
  }
  
  const getToolBelt = async () => {
        const response = await axios.get(`https://toolbelt-backend.herokuapp.com/api/v1/tools`);
        console.table(response.data);
        setToolBelt(response.data);
        console.log({tools});
  }

  const getProjects = async () => {
        const response = await axios.get(`https://toolbelt-backend.herokuapp.com/api/v1/projects`);
        console.table(response.data);
        setUserProjects(response.data);
        console.table({userProjects});
  }
  
  const getTools = async () => {
        const response = await axios.get(`https://toolbelt-backend.herokuapp.com/api/v1/tools`);
        console.table(response.data);
        setTools(response.data);
        console.table({tools});
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
      <div className='profile-section'>
        <h1 className="rotate">My ToolBelt</h1>
        <Link className="add-tool-button" to='/tool/toolBelt'>Got a Tool?</Link> 
        {toolBelt && displayToolBelt(toolBelt)}
      </div>
      <hr />
      <div className='profile-section'>
        <h1 className="rotate">My Projects</h1>
        {userProjects && displayProjects(userProjects)}
      </div>
      <hr />
      <div className='profile-section'>
        <h1 className="rotate">My Tools</h1>
        {tools && displayTools(tools)}
      </div>
      <hr />
    </>
  )
}

export default Profile;

//.filter((point) => {return point.user_id == userInfo._id})

  // const heroes = [
  //   {name: “Batman”, franchise: “DC”},
  //   {name: “Ironman”, franchise: “Marvel”},
  //   {name: “Thor”, franchise: “Marvel”},
  //   {name: “Superman”, franchise: “DC”}
  // ];
  
  // var marvelHeroes =  heroes.filter(function(hero) {
  //   return hero.franchise == “Marvel”;
  // });
