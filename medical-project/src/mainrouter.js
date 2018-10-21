import { Route } from 'react-router-dom'
import React from 'react';
import Homepage from './components/Homepage';
import Medicine from './medicalpage/Medicine';
import Signup from './medicalpage/signup';
import Login from './Login';




class MainRouter extends React.Component {
    render() {
        return (
            <main>
              <Route exact path='/' component={Signup}/>
              <Route  path='/login' component={Login}/>
              <Route  path='/medicine' component={Medicine}/>
              <Route  path='/homepage' component={Homepage}/>
              </main>
        );
    }

}
export default MainRouter;
