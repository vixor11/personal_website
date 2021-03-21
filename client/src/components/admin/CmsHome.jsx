import React from "react";
import "./Login.css";

import fetch from "node-fetch";

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
    };

    fetch(`${process.env["CURRENT_URL"]}/articles`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ articles: json });
      });
  }

  render() {
    return (
      <div id="loginPapi">
        {this.state.articles.data.map((article) => (
          <>
            <div>{article.title}</div>
            <div>{article.date_time_published}</div>

            <div>{article.main_text}</div>
          </>
        ))}
      </div>
    );
  }
}

export default LoginRegister;
