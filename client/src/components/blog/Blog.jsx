import React from 'react';
import './Blog.css';
import '../../index.css';
// don't forget the styles
import '@animated-burgers/burger-slip/dist/styles.css' 
import { Link } from 'react-router-dom';


class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      burgerOpen: false
    }
  }



  render() {
    return (
      <div id="mainHeader" className="" >
          <h1>
            Blog
          </h1>
          <h3> 
            I am not a phenomenal writer I literally just made this to make my own CMS.
          </h3>

          <div className="mainTextAbout">
            <div>
                <Link to="/portfolio">
                    Portfolio 
                </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Blog;
