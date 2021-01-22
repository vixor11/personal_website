import React from 'react';
import './Login.css';

import {
   TextField, Button
} from '@material-ui/core';
import fetch from 'node-fetch';


class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
    };

    fetch('http://localhost:3000/api/articles', {
        method: "GET"
      })
        .then(res => res.json())
        .then((json) => {
            this.setState({articles: json});
        })

  }

  render() {

    return (
      <div id="loginPapi">
        ah
      </div>
    );
  }
}

export default LoginRegister;
