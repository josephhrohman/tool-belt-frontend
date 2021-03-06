import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../auth/login/login.js'
import Signup from '../../auth/signup/signup.js'
import './nav.css'

const Nav = ({ currentUser, setCurrentUser, handleLogout }) => {
  const [ toggleL, setToggleL ] = useState(false),
        [ toggleS, setToggleS ] = useState(false);

  const toggleLogin = async (e) => {(toggleL ? setToggleL(false) : setToggleL(true))},
        toggleSignup = async (e) => {(toggleS ? setToggleS(false) : setToggleS(true))};

  return (
    <nav>
      <div className="public-links">
        <Link className="nav-link" to='/projects'>Projects</Link>
        <Link className="nav-link" to='/tools'>Tools</Link>
      </div>
      <Link to='/' className="logo-container"><img alt="Landing" src="../images/tbLogo.png" className="logo-icon"/></Link>
      { currentUser ? 
          <>
            <Link className="nav-link" to='/profile/:userId'>Profile</Link>
            <p className="nav-link" onClick={handleLogout}>Logout</p>
          </> : 
          <>
            <div className="button-grouping">
              <p className="nav-link" onClick={toggleSignup}>Sign Up</p>
              <p className="nav-link" onClick={toggleLogin}>Login</p>
            </div>
            {toggleL ? <Login setCurrentUser={setCurrentUser}/> : null }
            {toggleS ? <Signup /> : null }
          </>}
    </nav>
  )
}

export default Nav;