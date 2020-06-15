import React from 'react';
import './Header.css';
import '../../index.css';
import myFace from '../../images/headshot2019 copy.JPG';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Burger from '@animated-burgers/burger-slip' 
// don't forget the styles
import '@animated-burgers/burger-slip/dist/styles.css' 

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      burgerOpen: false,
      anchorEl: null
    }

    this.handleCloseBurger = this.handleCloseBurger.bind(this);
    this.handleOpenBurger = this.handleOpenBurger.bind(this);
  }

  handleCloseBurger = (event) => {
    this.setState({anchorEl: null});
    this.setState({burgerOpen: false});

  }

  handleOpenBurger = (event) => {
    this.setState({anchorEl: event.target});
    this.setState({burgerOpen: true});
  }

  render() {
    return (
      <div id="mainHeader" className="displayHorizontally sBetween width80">
        <img className="centerSelf small" src={myFace} alt="victor's gorgeous face" />
          
         <div className="centerSelf" id="toggle">
          <Burger isOpen={this.state.burgerOpen} type="Button" onClick={this.handleOpenBurger}/>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={this.state.burgerOpen}
            onClose={this.handleCloseBurger}
          >
            <Link to="/about" className="menuTopBar" onClick={this.handleCloseBurger}>
              <MenuItem className="menuTopBar">
                  About
              </MenuItem>
            </Link>
            <Link to="/portfolio" className="menuTopBar" onClick={this.handleCloseBurger}>
              <MenuItem className="menuTopBar">
                Portfolio
              </MenuItem>
            </Link>
          </Menu>
        </div>

      </div>
    )
  }
}

export default Header;
