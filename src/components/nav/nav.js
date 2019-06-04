import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/login.js'
import Signup from '../signup/signup.js'
import './nav.css'

class Nav extends Component{
  state = {
    loggedIn: false,
    showLogin: false,
    showSignUp: false,
  }

  showSignUp = (e) => {
    if (this.state.showSignUp === false) {
      this.setState({showSignUp: true});
      this.setState({showLogin: false});
    } else {
    this.setState({showSignUp: false});
    }
  };

  showLogin = (e) => {
    if (this.state.showLogin === false) {
      this.setState({showLogin: true});
      this.setState({showSignUp: false});
    } else {
    this.setState({showLogin: false});
    }
  };

  render(){
    return (
      <nav>
        <Link to='/'><img alt="Logo" src="../images/hexLogo.png" className="logo-icon"/></Link>
        {this.state.loggedIn === true 
          ? 
            <div className="button-grouping">
              <p className="nav-link" onClick={this.logout}>Logout</p>
              <Link to='/profile'><img alt="Profile" src="../images/hexLogo.png" className="profile-icon"/></Link>
            </div>
          : 
            <>
              <div className="button-grouping">
                <p className="nav-link" onClick={this.showSignUp}>Sign Up</p>
                <p className="nav-link" onClick={this.showLogin}>Login</p>
              </div>
              {this.state.showLogin === true ? <Login handleLogin={this.props.handleLogin}/> : <></> }
              {this.state.showSignUp === true ? <Signup /> : <></> }
            </>}
      </nav>
    )
  }
}

export default Nav;