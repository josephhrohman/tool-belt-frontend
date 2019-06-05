import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profilePage.css';

const Profile = ({ match, currentUser, showButtons, deletePost }) => {
  const [ error, setError ] = useState(null),
        [ user, setUser ] = useState({}),
        [ userPosts, setUserPosts ] = useState([]);

  useEffect(() => { //New method JUST for Hooks; Takes the place of 'componentDidMount'
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
  }, [match.params.userId]); //This makes it componentDidMount

  return(
    <div>
      <div className="profile-block">
        <div className="user-block">
          <p className="user-info">User Name</p>
          <p className="user-info">Email</p>
          <p className="user-info">Date Joined</p>
        </div>
        <img src="#" alt="Profile" />
      </div>
      <div className="profile-block">
        <p className="sample-block">ToolBelt</p> 
      </div>
      <div className="profile-block">
        <p className="sample-block">User Projects</p> 
      </div>
      <div className="profile-block">
        <p className="sample-block">User Tools</p>
      </div>
    </div>
  )
}

export default Profile;


const ProfileContainer = ({ match, currentUser, showButtons, deletePost }) => {

  useEffect(() => { //New method JUST for Hooks; Takes the place of 'componentDidMount'
    const getProfile = async () => {
      try {
        const userId = match.params.userId;
        const response = await axios.get(`${process.env.REACT_APP_API}/users/${userId}`);
        console.log(response);
        setUser(response.data.user);
        setUserPosts(response.data.userPosts);
      } catch(err) {
        console.log(err);
        setError(err.response.data.error);
      };
    }

    getProfile();
  }, [match.params.userId]); //This makes it componentDidMount

  const deletePost = postId => {
    if (window.confirm('Are you sure?')) {
      try {
        const response = await axios.delete(`${process.env.REACT_APP_API}/posts/${postId}`,
          { withCredentials: true });
        // console.log(response);
        const updatedPosts = userPosts.filter(post => post._id != postId);
        setUserPosts(updatedPosts);
      } catch(err) {
        console.log(err);
        setError(err.response.data.error);
      };
    };
  };

  return( 
    <Profile user={user} userPosts={userPosts} showButtons={showButtons} deletePost={deletePost}/>
  );
};

export default ProfileContainer;