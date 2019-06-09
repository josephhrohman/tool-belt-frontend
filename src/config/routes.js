import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing  from '../components/layout/landingPage/landingPage';
import Profile  from '../components/layout/profile/profile';
import Projects from '../components/layout/projects/projects';
import Tools    from '../components/layout/tools/tools';

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path='/' component={ Landing }/>
    <Route path='/profile/:userId' render={(props) => <Profile {...props} />}/>
    <Route path='/projects/' component={ Projects }/>
    <Route path='/projects/:postId' render={(props) => <Projects {...props} currentUser={currentUser} />}/>
    <Route path='/tools' component={ Tools }/>
    <Route path='/tools/:postId' render={(props) => <Tools {...props} currentUser={currentUser} />}/>
  </Switch>
);

export default Routes;
