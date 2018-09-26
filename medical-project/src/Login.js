import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import history from './history';


const style = {
  marginLeft: '40%',
  marginTop: '0px'
};
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick(event) {

    let apiBaseUrl = "http://localhost:8080/";
    let userName = this.state.username;
    let password = this.state.password;

    let payLoad = {
      "userName": userName,
      "password": password,

    }

    axios.post(apiBaseUrl + 'Login', payLoad,  {headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'}}).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        console.log("Login successfull");
        alert("Login successfull")
       history.push('/homepage');
      } else if (response.status === 204) {
        console.log("Username password do not match");
        alert("Your password is wrong")
        history.push('/');
      }
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Username"
              style={style}
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              style={style}
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;