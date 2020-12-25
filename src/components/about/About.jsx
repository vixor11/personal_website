import React from 'react';
import './About.css';
import '../../index.css';
import resume from '../../images/resume.pdf';
import starupIdeas from '../../images/startupIdeas.pdf';
// don't forget the styles
import '@animated-burgers/burger-slip/dist/styles.css' 

class About extends React.Component {
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
            Hey! I'm Victor
          </h1>
          <h3> 
            Stanford CS  |  Venezuelan 
          </h3>

          <div className="mainTextAbout">
            <div>
              <strong>Stanford Classes</strong>
              <br/>
              I’m currently a rising sophomore at Stanford about to declare a major in Computer Science. 
              Some fun classes I’ve taken over the past year include <a href="https://web.stanford.edu/class/cs182/" target="_blank" rel="noopener noreferrer">CS182: Ethics, Public Policy, and Technological Change</a>,
              a class on how to, as a technologically propense individual, build technologies with sound ethical frameworks, <a href="http://web.stanford.edu/class/cs103/" target="_blank" rel="noopener noreferrer">CS103: Mathematical Foundations of Computing</a>
              , a class on the mathematical underpinnings of computer science, 
              from formal logic, to turing machines, complexity theory, and beyond, and <a href="https://undergrad.stanford.edu/programs/special-focus-programs/esf/about-education-self-fashioning-program" target="_blank" rel="noopener noreferrer">ESF: Discovery of the Self and its Possibilities</a>, 
              a literature-based philosophy course centered around the notion of selfhood and appreciating one’s capacities as agents capable of 
              meaningfully influencing oneself and others. 
            </div>
            <div>
              <strong>Stanford Clubs</strong>
              <br/>
              Outside of school, I am an analyst at both <em>Stanford Finance</em>, a pre-professional group that facilitates students’ entry into the financial services sector and the <em>Blyth Fund</em>, a student group that manages over $165k of Stanford’s endowment and gives back its returns to the financial aid department. I am also FO at the <em>Venezuelan Student Association</em> and a member of the <em>International Latino Business Association</em>.
            </div>
            <div>
              <strong>Research at the Hoover Institution</strong>
              <br/>
              I am also a Research Assistant at the renowned Hoover Institution under tenured professor <a href="https://stephen-haber.com/" target="_blank" rel="noopener noreferrer">Stephen Haber</a>. My role as part of his research team on the paper “Ecological Origins of Economic and Political Systems” is technical; I’ve used R and the google maps API to collect coordinate data on a set of 30,000 cities, and then performed a variety of tests to ensure the validity of the obtained data:
              <ol className="bullets">
                <li>Performing queries with the obtained coordinates to ensure an adequate match </li>
                <li>Performing fuzzy match checks using the Levenshtein Distance Algorithm for string similarity</li>
                <li>Modifying query inputs for duplicate coordinates</li>
              </ol>
            </div>
            <div>
              <strong>Technical skills/passions</strong>
              <br/>
              I have experience in full stack web development (MongoDB, Express, Node, React) and 
              programming in Python, C++, C, and R. I also have experience <a href="https://www.youtube.com/channel/UCsx9YZX7LskFSfGV7iFwNgg?view_as=subscriber" target="_blank" rel="noopener noreferrer">video-editing with  
              Final Cut Pro X</a> and making illustrations with Adobe Photoshop and Illustrator (portfolio to be added soon).
              I am also very into lifting weights, playing the piano, golf, and discussing Venezuela’s political past and future.
            </div>
            <div>
              <strong>Future aspirations</strong>
              <br/>
              During my college career and soon after, I want to dedicate my time to building profitable software 
              businesses in the consumer sector. 
              Upon what I believe is the impending government transition in my home country, 
              Venezuela, I intend to go back and leverage my education and connections made at Stanford to 
              bring about transformative social and economic change via the development of currently non-existent 
              technological services and infrastructure. Feel free to take a look at <strong><a className="noUnderline" href={starupIdeas} target="_blank" rel="noopener noreferrer">this document</a></strong> that has some 
              startup ideas/problem statements I’ve come up with over the years to get a feel for the type of 
              things I’d like to be working on in the near future.
              <br/>
              <br/>
              Feel free to <strong><a className="noUnderline" href={resume} target="_blank" rel="noopener noreferrer">download my resume</a></strong> or reach out to me at <strong><a className="noUnderline" href="mailto:victorcc@stanford.edu">victorcc@stanford.edu</a></strong>.
            </div>
          </div>
          
      </div>
    )
  }
}

export default About;
