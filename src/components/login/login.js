import React from 'react';
import './login.css'

function Login(handleLogin) {

  
  return (
    <div className="login-modal">
      <h3>Login</h3>
      <form action="" className="form-boxes" onSubmit={handleLogin}>
        <input className="inputField" type="email" id='email' name='email' placeholder="Email" />
        <input className="inputField" type="password" id='password' name='password' placeholder="Password" />
        <input className="inputField" type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Login;