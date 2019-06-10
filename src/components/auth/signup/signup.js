import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'

const SignUp = () => {
  const [ newUser, setNewUser ] = useState({
          name: '',
          email: '',
          password: '',
          password2: ''
        }),
        {name, email, password, password2} = newUser;

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(newUser);
    try {
      await axios.post('http://localhost:4000/api/v1/auth/register', newUser, {withCredentials: true});
      console.log('success');
    } catch(err) {
      console.log('failed')
    };
  };

  return (
    <div className="signup-modal">
      <h3>Sign Up</h3>
      <form className='form-boxes-signup' onSubmit={handleSignUp}>
        <input className="input-field-signup" type="text" onChange={handleChange} value={name} name='name' placeholder="Name" />
        <input className="input-field-signup" type="email" onChange={handleChange} value={email} name='email' placeholder="Email" />
        <input className="input-field-signup" type="password" onChange={handleChange} value={password} name='password' placeholder="Password" />
        <input className="input-field-signup" type="password" onChange={handleChange} value={password2} name='password2' placeholder="Confirm Password" />
        <input className="input-field-signup" type='submit' value='submit' />
      </form>
    </div>
  )
};

export default SignUp;