import React, { useEffect, useState } from 'react';
import ProfileBlock from '../profileBlock/profileBlock.js';
import axios from 'axios';
import './profile.css';

const Profile = ({ match, deletePost }) => {
  const [ error, setError ] = useState(null),
        [ user, setUser ] = useState({}),
        [ userPosts, setUserPosts ] = useState([]);

// Getting Profile.. Now do this for post data.
  useEffect(() => {
    const getProfile = async () => {
      try {
        const userId = match.params._id;
        const response = await axios.get(`http://localhost:4000/api/v1/users/${userId}`);
        console.log(response);
        setUser(response.data.user);
        setUserPosts(response.data.userPosts);
      } catch(err) {
        console.log(err);
        setError(err.response.data.error);
      };
    }
  getProfile();
  }, [match.params.userId]);

// Axios call for all posts 'findMany', search for userId
// For each method funnels these data pockets into 'profileBlock' component
// Show all components in specified area in profile

const displayTools = tools => tools.map(tool => <ProfileBlock data={tool}/>)
const displayProjects = projects => projects.map(project => <ProfileBlock data={project}/>)

let tools = [{name: 'hammer'}, {name: 'hammer'}, {name: 'hammer'}, {name: 'hammer'}]
let projects= [{name:'hammer things'},{name:'hammer things'},{name:'hammer things'},{name:'hammer things'}]

  return(
    <>
      <div className="profile-section">
        <div className="user-block">
          <p className="user-info">User Name</p>
          <p className="user-info">Email</p>
          <p className="user-info">Date Joined</p>
        </div>
        <img src="#" alt="Profile" className="user-pic" />
      </div>
      <div className="profile-section">
        {/* <p className="sample-block">ToolBelt</p>  */}
        {tools && displayTools(tools)}
      </div>
      <div className="profile-section">
        {/* <p className="sample-block">User Projects</p>  */}
        {projects && displayProjects(projects)}
      </div>
      <div className="profile-section">
        {/* <p className="sample-block">User Tools</p> */}
        
      </div>
    </>
  )
}

export default Profile;
