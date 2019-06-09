import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing  from '../components/layout/landingPage/landingPage';
import Profile  from '../components/layout/profile/profile';
import Projects from '../components/layout/multiProject/multiProject';
import Project from '../components/layout/uniProject/uniProject';
import Tools    from '../components/layout/multiTool/multiTool';
import Tool    from '../components/layout/uniTool/uniTool';
import CreateItem    from '../components/replicated/createItem/createItem';

const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path='/' component={ Landing }/>
    <Route path='/profile/:userId' render={(props) => <Profile {...props} />} />
    <Route path='/projects/newProject' render={ (props) => <CreateItem {...props} currentUser={currentUser} />} />
    <Route path='/projects/project' component={ Project } />
    <Route path='/projects/' render={ (props) => <Projects {...props} currentUser={currentUser} />} />
    <Route path='/tools/newTool' render={ (props) => <CreateItem {...props} currentUser={currentUser} />} />
    <Route path='/tools/tool' component={ Tool } />
    <Route path='/tools' render={ (props) => <Tools {...props} currentUser={currentUser} />} />
  </Switch>
);

export default Routes;
