import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing  from '../components/layout/landingPage/landingPage';
import Profile  from '../components/layout/profile/profile';
import Projects from '../components/layout/multiProject/multiProject';
import Project from '../components/layout/uniProject/uniProject';
import Tools    from '../components/layout/multiTool/multiTool';
import Tool    from '../components/layout/uniTool/uniTool';

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path='/' component={ Landing }/>
    <Route path='/profile/:userId' render={(props) => <Profile {...props} />}/>
    <Route path='/projects/project' component={ Project } />
    <Route path='/projects/' component={ Projects }/>
    <Route path='/tools/tool' component={ Tool } />
    <Route path='/tools' component={ Tools }/>
  </Switch>
);

export default Routes;
