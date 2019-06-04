import React, { Component } from 'react';
import axios from 'axios';
import Routes from './config/routes.js';
import Nav from './components/nav/nav.js';

class App extends Component {
  state = {
    loggedIn: false,
    email: '',
    password: '',
    id: ''
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:4000/api/v1/auth/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then(response => {
      if (response.status === 200) {
        this.setState({loggedIn: true});
        this.setState({id: response.data});
        this.props.history.push('/user');
      };
    }).catch((errors) => {
      console.log(errors);
    });
  }

  render() {
    return (
      <>
        <Nav props={this.props} handleLogin={this.handleLogin}/>
        <Routes />
      </>
    );
  }
}

// render={(routeProps) => 
//   (<Landing {...routeProps} 
//   props={location} 
//   handleLogin={handleLogin} 
//   emailPasswordInput={emailPasswordInput}
//   handleSignUp={handleSignUp} />)}

export default App;