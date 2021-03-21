import React from 'react';
import './Experience.css';
import '../../index.css';
// don't forget the styles
import '@animated-burgers/burger-slip/dist/styles.css' 
import { SocialIcon } from 'react-social-icons';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      burgerOpen: false
    }
  }



  render() {
    return (
      <div id="mainHeader" >
          <div className="displayHorizontally centerSelf icons">
            <SocialIcon url="https://twitter.com/victorcardenas" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon url="https://www.linkedin.com/in/victor-d-cardenas/" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon url="https://github.com/vixor11" target="_blank" rel="noopener noreferrer"/>
          </div>
          <div>Made by Victor Cardenas, &copy; 2020.</div>
      </div>
    )
  }
}

export default Experience;
