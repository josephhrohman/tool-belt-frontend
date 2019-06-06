import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing  from '../components/landingPage/landingPage';
import ProfilePage  from '../components/profilePage/profilePage';
import Profile  from '../components/profile/profile';
import Projects from '../components/projectsPage/projectsPage';
import Tools    from '../components/toolsPage/toolsPage';

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path='/' component={ Landing }/>
    <Route path='/profile:userId' render={(props) => <ProfilePage {...props} />}/>
    <Route path='/profile' component={ Profile }/>
    <Route path='/projects/' component={ Projects }/>
    <Route path='/projects/:postId' render={(props) => <Projects {...props} currentUser={currentUser} />}/>
    <Route path='/tools' component={ Tools }/>
    <Route path='/tools/:postId' render={(props) => <Tools {...props} currentUser={currentUser} />}/>
  </Switch>
);

export default Routes;
