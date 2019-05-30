import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
  render(){
    return (
      <div class="side-bar">
        <img src="" alt="" />
        <div>
          <nav> 
            <Link to={'/'}>Home</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/projects/project'}>Project</Link>
            <Link to={'/tools'}>Tools</Link>
            <Link to={'/tools/tool'}>Tool</Link>
          </nav>
        </div>
      </div>
    )
  }
}

export default Nav;