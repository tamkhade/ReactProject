import { Route } from 'react-router-dom'
import Login from './Login'
import React from 'react';
import Userinfo from './UserInfoPage';

class MainRouter extends React.Component {
    render() {
        return (
            <main>
              <Route exact path='/' component={Login}/>
              <Route  path='/userinfopage' component={Userinfo}/>
              </main>
        );
    }

}
export default MainRouter;
