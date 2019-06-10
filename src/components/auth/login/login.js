import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

const Login = ({ setCurrentUser, history }) => {
  const [ userData, setUserData ] = useState({
          email: '', password: '', });

  const { email, password } = userData;

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name] : e.target.value
    });
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/auth/login', userData, {
        withCredentials: true});
        const currentUser = response.data;
        localStorage.currentUser = currentUser;
        setCurrentUser(currentUser);
      } catch(error) {
      console.log(error);
    };
  };

  return (
    <div className="login-modal">
      <h3>Login</h3>
      <form className="form-boxes-login" onSubmit={handleSubmit}>
        <input className="input-field-login" type="email" id='email' onChange={handleChange} name='email' value={email} placeholder="Email" />
        <input className="input-field-login" type="password" id='password' onChange={handleChange} name='password' value={password} placeholder="Password" />
        <input className="input-field-login" type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Login;