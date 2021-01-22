import React from 'react';
import Login from './Login';
import CmsHome from './CmsHome';

import {
    BrowserRouter, Route, Switch, Redirect
  } from 'react-router-dom';


class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
      };

    fetch('http://localhost:3000/api/user/checkLoggedIn', {
        method: "GET"
      })
        .then(res => res.json())
        .then((json) => {
          console.log("after check endpoing: " + json);
          
            if(json === true) {
                this.setState({isLoggedIn: json.isLoggedIn});
            }
        })
    
  }

  handleLogin = (loginStatus) => {      
    this.setState({isLoggedIn: loginStatus});
  }

  render() {
      console.log(this.state.isLoggedIn);
      

    return (
      <div id="loginPapi">
        <Switch>
            <Route 
                path="/admin"
                render = { props => <Login {...props}
                isLoggedIn={this.state.isLoggedIn}
                handleLogin={this.handleLogin}/> }
            />
        </Switch>
      </div>
    );
  }
}

export default LoginRegister;
