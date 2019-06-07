import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/login.js'
import Signup from '../signup/signup.js'
import './nav.css'

const Nav = ({ currentUser, setCurrentUser }) => {
  const [ toggleL, setToggleL ] = useState(false),
        [ toggleS, setToggleS ] = useState(false);

  const toggleLogin = async (e) => {(toggleL ? setToggleL(false) : setToggleL(true))},
        toggleSignup = async (e) => {(toggleS ? setToggleS(false) : setToggleS(true))};

  return (
    <nav>

      { currentUser === true 
        ? 
          <>
            <div className="button-grouping">
              <p className="nav-link" >Logout</p> 
            </div>
            <Link to='/profile'><img alt="Profile" src="../images/hexLogo.png" className="profile-icon"/></Link>
          </>
        : 
          <>
            <div className="button-grouping">
              <p className="nav-link" onClick={toggleSignup}>Sign Up</p>
              <p className="nav-link" onClick={toggleLogin}>Login</p>
            </div>
            {toggleL === true ? <Login setCurrentUser={setCurrentUser}/> : <></> }
            {toggleS === true ? <Signup /> : <></> }
          </>}
    </nav>
  )
}

export default Nav;

// NOOOOOOOTES
// Make the toggling modals close each other when opened

// handleLogin={this.props.handleLogin}
//onClick={this.logout}