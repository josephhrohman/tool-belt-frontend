import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './config/routes.js';
import Nav from './components/nav/nav.js';
import Aside from './components/aside/aside.js';

const App = () => {
  const [ currentUser, setCurrentUser ] = useState(localStorage.currentUser);

  const handleLogout = async () => {
    if (localStorage.currentUser && window.confirm('Logout ?')) {
      localStorage.removeItem('currentUser');
      const response = await axios.post('http://localhost:4000/api/v1/auth/logout', {withCredentials: true});
      console.log(response);
    }
  }

  return (
    <>
      <Nav handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Aside />
      <Routes currentUser={currentUser}/>
    </>
  );
}

export default withRouter(App);