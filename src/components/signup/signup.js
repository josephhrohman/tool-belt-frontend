import React from 'react';
import axios from 'axios';
import './signup.css'

function SignUp() { 

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value,
          email = document.querySelector('#email').value,
          password = document.querySelector('#password').value,
          password2 = document.querySelector('#password2').value;

    axios({
      method: 'post',
      url: 'http://localhost:4000/api/v1/auth/register',
      data: { name, email, password, password2 }
    }).then(function (response) {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="signup-modal">
      <h3>Sign Up</h3>
      <form className='form-boxes' onSubmit={handleSignUp}>
        <input className="inputField" type="text" id='name' name='name' placeholder="Name" />
        <input className="inputField" type="email" id='email' name='email' placeholder="Email" />
        <input className="inputField" type="password" id='password' name='password' placeholder="Password" />
        <input className="inputField" type="password" id='password2' name='password2' placeholder="Confirm Password" />
        <input className="inputField" type='submit' value='submit' />
      </form>
    </div>
  )
};

export default SignUp;