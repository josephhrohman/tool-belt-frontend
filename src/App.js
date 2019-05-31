import React, { Component } from 'react';
import Routes from './config/routes.js'
import Nav from './components/nav/nav.js'

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Routes />
      </>
    );
  }
}

export default App;