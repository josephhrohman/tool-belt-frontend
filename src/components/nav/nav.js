import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

class Nav extends Component{

  

  render(){
    return (
      <nav>
        <div className="logo-profile">
          <Link to='/'><img alt="Logo" src="../images/hexLogo.png" className="logo-icon"/></Link>
          <Link to='/profile'><img alt="Profile" src="../images/hexLogo.png" className="profile-icon"/></Link>
        </div>
        <aside>
          <p className="nav-link">SignUp</p>
          <p className="nav-link">Login</p>
          <Link to='/projects' className="nav-link" >Projects</Link>
          <Link to='/projects/project' className="nav-link" >Project</Link>
          <Link to='/tools' className="nav-link" >Tools</Link>
          <Link to='/tools/tool' className="nav-link" >Tool</Link>
        </aside>
        <div className="login-modal">
          <h3>Login</h3>
          <form action="">
            <input type="text" placeholder="User Name" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="signup-modal">
          <h3>Sign Up</h3>
          <form action="">
            <input type="text" placeholder="User Name" required />
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Nav;