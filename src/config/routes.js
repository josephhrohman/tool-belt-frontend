import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/landingPage/landingPage';
import Profile from '../components/profilePage/profilePage';
import Projects from '../components/projectsPage/projectsPage';
import Project from '../components/projectPage/projectPage';
import Tools from '../components/toolsPage/toolsPage';
import Tool from '../components/toolPage/toolPage';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Landing }/>
    <Route path='/profile' component={ Profile }/>
    <Route path='/projects' component={ Projects }/>
    <Route path='/projects/project' component={ Project }/>
    <Route path='/tools' component={ Tools }/>
    <Route path='/tools/tool' component={ Tool }/>
  </Switch>
);

export default Routes;