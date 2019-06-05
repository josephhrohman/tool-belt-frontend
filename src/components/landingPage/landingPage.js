import React, { Component } from 'react';
import TopBlock from '../topBlock/topBlock';
import './landingPage.css'

class Landing extends Component{
  render(){
    return(
      <>
        <div className= "landing">
          <TopBlock />
          <TopBlock />
          <TopBlock />
          <TopBlock />
          <TopBlock />
          <TopBlock />
        </div>
      </>
    )
  }
}

export default Landing;