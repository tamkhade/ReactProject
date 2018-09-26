import { Route } from 'react-router-dom'
import Login from './Login'
import React from 'react';
import Homepage from './components/Homepage';

class MainRouter extends React.Component {
    render() {
        return (
            <main>
              <Route exact path='/' component={Login}/>
              <Route  path='/homepage' component={Homepage}/>
              </main>
        );
    }

}
export default MainRouter;
