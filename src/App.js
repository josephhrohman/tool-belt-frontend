import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './config/routes.js';
import Nav from './components/layout/nav/nav.js';
import Footer from './components/layout/footer/footer';
import './App.css';

const App = ({ history }) => {
  const [ currentUser, setCurrentUser ] = useState(localStorage.currentUser);

  const handleLogout = async () => {
    if (localStorage.currentUser && window.confirm('Logout ?')) {
      localStorage.removeItem('currentUser');
      const response = await axios.post('https://toolbelt-backend.herokuapp.com/api/v1/auth/logout', {withCredentials: true});
      console.log(response);
    }
  }

  return (
    <>
      <Nav handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes currentUser={currentUser} history={history}/>
      <Footer />
    </>
  );
}

export default withRouter(App);