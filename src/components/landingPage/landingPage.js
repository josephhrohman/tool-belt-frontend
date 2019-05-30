import React, { Component } from 'react';

class Landing extends Component{
  render(){
    return(
      <div>
        <h1>Landing Page</h1>
        <div class="login-modal">
          <h3>Login</h3>
          <form action="">
            <input type="text" placeholder="User Name" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div class="signup-modal">
          <h3>Sign Up</h3>
          <form action="">
            <input type="text" placeholder="User Name" required />
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Landing;