import React, { Component } from 'react';
import './landingPage.css'
import ArticleBlock from '../../replicated/articleBlock/articleBlock';

class Landing extends Component{
  render(){
    return(
      <>
        <div className= "landing">
          <img src="" alt="" />
          <h1>Top Projects</h1>
          <div className="landing-top">
            <ArticleBlock />
            <ArticleBlock />
            <ArticleBlock />
          </div>
          <h1>Top Tools</h1>
          <div className="landing-top">
            <ArticleBlock />
            <ArticleBlock />
            <ArticleBlock />
          </div>
        </div>
      </>
    )
  }
}

export default Landing;