import React, { useState } from 'react';
import axios from 'axios';
import './createItem.css'

const CreateItem = () => {
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

  return (
    <div className="signup-modal">
      <h3>New Thing!</h3>
      <form className='form-boxes' >
        <input className="inputField" type="text" onChange={handleChange} value={name} name='name' placeholder="Name" />
        <input className="inputField" type="email" onChange={handleChange} value={email} name='email' placeholder="Email" />
        <input className="inputField" type="password" onChange={handleChange} value={password} name='password' placeholder="Password" />
        <input className="inputField" type="password" onChange={handleChange} value={password2} name='password2' placeholder="Confirm Password" />
        <input className="inputField" type='submit' value='submit' />
      </form>
    </div>
  )
};

export default CreateItem;

// onSubmit={handleSignUp}