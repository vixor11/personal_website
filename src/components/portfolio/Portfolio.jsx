import React from 'react';
import './Portfolio.css';
import '../../index.css';
import GridElement from '..//gridElement/gridElement';

// images to import
import photoShare from '../../images/photoShare.jpg';
import genericSocialMedia from '../../images/genericSocialMedia.jpg';
import tabTab from '../../images/tabTab.jpg';
import edav from '../../images/edav.jpg';
import library from '../../images/library.jpg';

class Portfolio extends React.Component {

  render() {
    return (
    <div className="">
        <h1 className="portfolio-largeHello">
          Goodbye.
        </h1>
        <div className="portfolio-subheader">
          I'm Victor Cardenas, a Stanford CS Student from Caracas, Venezuela.
        </div>
        <div className="portfolio-grid">
          <div >
            <GridElement 
              image={photoShare} 
              url="nJYIzDxvJLA"
              title={"Photo Share: React Photo Sharing App"}
              date={"May 2020. "}
              description={"This was my final project for a class I took my freshman spring, CS142. Styling was done using React Material UI components and the back-end was done by creating a REST API using Node, Express, and MongoDB (with Mongoose Schema)."}
            />
          </div>
          <div >
            <GridElement 
              image={genericSocialMedia} 
              url="SOBMdVRhwGo"
              title={"Generic Social Media: vanillaJS Twitter Knockoff"}
              date={"April 2020. "}
              description={"Project for a class I took my freshman spring, CS193x. Used Node/Express/MongoDB to create a REST API for the backend, and raw CSS/HTML/vanillaJS for the frontend."}
            />
          </div>
          <div>
            <GridElement 
              image={tabTab} 
              url="Hbj1wDQZoKY"
              title={"TabTab: Share More, Pay Less"}
              date={"March/April 2020. "}
              description={"Splitting recurring payments is a pain. Tabtab enables anyone to safely split the cost of subscription services, rent, and more. Built this with my two quarantine buddies: Santiago Hernandez and Tomas Cortes"}
            />
          </div>
          <div >
            <GridElement 
              image={edav} 
              external={"http://debatevenezuela.org/"}
              title={"English Debate Association of Venezuela"}
              date={"July/August 2018. "}
              description={"Static website built for the national debate organization I founded in high school, edav."}
            />
          </div>
          <div >
            <GridElement 
              image={library} 
              external={"https://www.ecak12.com/ECA_Library/libraryHomePage.html"}
              title={"Escuela Campo Alegre Library Website"}
              date={"March 2018. "}
              description={"Static website built for my school's library in my junior year with my classmate Caio Nostre."}
            />
          </div>
        </div>
        
      </div>
    )
  }
}

export default Portfolio;
