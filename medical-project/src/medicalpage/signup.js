import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import history from '../history';


const style = {
  marginLeft: '40%',
  marginTop: '0px'
};
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',  
      username: '',
      password: ''
    }
  }

  handleClick(event) {

    let apiBaseUrl = "http://localhost:8080/";
    let userName = this.state.username;
    let password = this.state.password;
    let firstname = this.state.firstname;
    let lastname = this.state.lastname;

    let payLoad = {
      "userName": userName,
      "password": password,
      "firstname" : firstname,
      "lastname": lastname

    }

    axios.post(apiBaseUrl + 'SignUp', payLoad,  {headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'}}).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        console.log("Login successfull");
        alert("Login successfull")
       history.push('/login');
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
              title="Sign Up"
            />
            <TextField
              hintText="Enter your FirstName"
              style={style}
              floatingLabelText="FirstName"
              onChange={(event, newValue) => this.setState({ firstname: newValue })}
            />
            <br />
            <TextField
              type="text"
              style={style}
              hintText="Enter your LastName"
              floatingLabelText="LastName"
              onChange={(event, newValue) => this.setState({ lastname: newValue })}
            />
            <br />

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

             <TextField
              type="password"
              style={style}
              hintText="Enter your confirm Password"
              floatingLabelText="Confirm Password"
              onChange={(event, newValue) => this.setState({ confirmpassword: newValue })}
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