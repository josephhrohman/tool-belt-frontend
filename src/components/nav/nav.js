import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/login.js'
import Signup from '../signup/signup.js'
import './nav.css'

const Nav = ({ currentUser }) => {
  const [ toggle, setToggle ] = useState({
          toggleLogin: 'false',
          toggleSignup: 'false',
        });

  // const toggleWindow = e => {
  //         setToggle({ ...toggle, [e.target.name] : e.target.value
  //         });
  //       };
        

  const toggleLogin = async e => {
    if (toggleLogin === false) {
      setToggle({toggleLogin: 'true', toggleSignup: 'false'})
    } else {
      setToggle({toggleLogin: 'true'});
    }
  };

  const toggleSignup = async e => {
    if (toggleSignup === false) {
      setToggle({toggleSignup: 'true', toggleSignup: 'false'})
    } else {
      setToggle({toggleSignup: 'true'});
    }
  };

  return (
    <nav>
      { currentUser === true 
        ? 
          <div className="button-grouping">
            <p className="nav-link" >Logout</p> 
            <Link to='/profile'><img alt="Profile" src="../images/hexLogo.png" className="profile-icon"/></Link>
          </div>
        : 
          <>
            <div className="button-grouping">
              <p className="nav-link" onClick={toggleLogin}>Sign Up</p>
              <p className="nav-link" onClick={toggleSignup}>Login</p>
            </div>
            {useState.toggleLogin === true ? <Login /> : <></> }
            {useState.toggleSignup === true ? <Signup /> : <></> }
            {/* <Login />  */}
            {/* <Signup /> */}
          </>}
    </nav>
  )
}

export default Nav;


// handleLogin={this.props.handleLogin}
//onClick={this.logout}