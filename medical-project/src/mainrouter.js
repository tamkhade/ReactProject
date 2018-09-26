import { Route } from 'react-router-dom'
import Login from './Login'
import React from 'react';
import Homepage from './components/Homepage';
import Medicine from './medicalpage/Medicine'


class MainRouter extends React.Component {
    render() {
        return (
            <main>
              <Route exact path='/' component={Login}/>
              <Route  path='/homepage' component={Homepage}/>
              <Route  path='/medicine' component={Medicine}/>
              </main>
        );
    }

}
export default MainRouter;
