import React from 'react';
import './gridElement.css';
import '../../index.css';
import ReactPlayer from 'react-player'
import { Button, Backdrop, Modal, Fade, Zoom } from '@material-ui/core';

import '@animated-burgers/burger-slip/dist/styles.css' 

class GridElement extends React.Component {
  constructor(props) {
    super(props);

    this.state={
        openModal: false
    }

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);

  }

  handleOpenModal = () => {
    if (this.props.url){
      this.setState({openModal: true});
    } 
  }

  handleCloseModal = () => {
    this.setState({openModal: false});
  }

  render() {
    return (
        <div class="content test">
            <Button onClick={this.handleOpenModal}>
                <a href={this.props.external} className="linkOverride" target="_blank" rel="noopener noreferrer">
                  <div class="content-overlay"></div>
                  <img src={this.props.image} alt="sup bro" className="content-image"/>
                  <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">{this.props.title}</h3>
                      <h5 class="content-text">
                          <strong>{this.props.date} </strong>
                          {this.props.description}
                      </h5>
                  </div>
                </a>
            </Button>


            <Modal
                open={this.state.openModal}
                styles={{ overlay: { background: "blue" } }}
                styles={{ modal: {}, overlay: { background: "#ccc" } }}
                onClose={this.handleCloseModal}
                openAfterTransition
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={this.state.openModal}>
                    <div className="popUpStyleParent">
                        <ReactPlayer url={this.props.url} />
                    </div>
                </Fade>
            </Modal>


        </div>
    )
  }
}

export default GridElement;
