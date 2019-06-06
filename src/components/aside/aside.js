import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../images/hexLogo.png';
import './aside.css';

function Aside() {
  return (
    <aside>
      <Link to='/'><img alt="Profile" src="../images/hexLogo.png" className="logo-icon"/></Link>
      <div className="tabs">
        <div className="category-tab">
          <Link to='/projects'>Project</Link>
        </div>
        <div className="category-tab">
          <Link to='/tools'>tools</Link>
        </div>
      </div> 
    </aside>
  )
}

export default Aside;