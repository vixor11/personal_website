import React from 'react';
import './Login.css';

import {
   TextField, Button
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import fetch from 'node-fetch';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameValue: '',
      passwordValue: '',
    //   errorMessageLogin: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitLogout = this.handleSubmitLogout.bind(this);

  }
  
  handleChangeUsername(event) {
    this.setState({usernameValue: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({passwordValue: event.target.value});
  }

  handleSubmitLogin(event) {
      console.log(38);
      
    let username = this.state.usernameValue; 
    let password = this.state.passwordValue;
    let data = {
        login_name: username, 
        pwd: password
    }
    
    event.preventDefault();
    fetch('http://localhost:3000/api/user/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then((json) => {
            console.log("after login endpoint: " + json.isLoggedIn);
            this.props.handleLogin(json.isLoggedIn);
            // this.setState({errorMessageLogin: "Login: Incorrect username or password"});
        })
  }

  handleSubmitLogout(event) {
    console.log(61);

    event.preventDefault();
    fetch('http://localhost:3000/api/user/logout', {
            method: "POST",
        })
        .then(res => res.json())
        .then((json) => {
            console.log(json);
            this.props.handleLogin(json.isLoggedIn);
            // this.setState({errorMessageLogin: "Login: Incorrect username or password"});
        })
    
  }

  render() {

    return (
      <div id="loginPapi">
        <div>
          <h1>
            Login
          </h1>
          <form onSubmit={this.handleSubmitLogin} className="mainForm displayHorizontally">
            <div>
              <TextField label="Username*" type="text" value ={this.state.usernameValue} onChange={this.handleChangeUsername}/>
            </div>
            <div>
              <TextField label="Password*" type="password" value ={this.state.passwordValue} onChange={this.handleChangePassword}/>
            </div>

            {/* <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={this.state.openLogin} autoHideDuration={6000} onClose={this.handleClose}>
              {
                this.state.errorMessageLogin ? 
                  <Alert severity="error">
                    {this.state.errorMessageLogin}
                  </Alert>
                : 
                  <Alert severity="success">
                    Login success!
                  </Alert>
              }
            </Snackbar> */}

            <Button className="test button" onClick={this.handleOpen} type="submit" color="primary" variant="contained">
              Login
            </Button>
          </form>
          <Button className="test button" onClick={this.handleSubmitLogout} type="submit" color="primary" variant="contained">
            Logout
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
