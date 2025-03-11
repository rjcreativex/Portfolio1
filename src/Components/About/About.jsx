import React from 'react';
import './About.css';
import ProfileImage from '../../assets/_DSC1575.png';
import theme_pattern from "../../assets/portfolio/brush.png";

export const About = () => {
  return (
    <div id='about'className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="ThemePattern" className="theme_pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={ProfileImage} className="profile_about" alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              As a passionate Full-Stack Developer, I specialize in building scalable and efficient web applications that provide seamless user experiences. With expertise in both front-end and back-end development, I create dynamic, responsive, and high-performance solutions tailored to meet business needs.
            </p>
            <p>
              My technical stack includes modern JavaScript frameworks like React.js for interactive UI development, along with Node.js and Spring Boot for robust backend services. I have experience working with databases like PostgreSQL and MongoDB, ensuring optimized data management. Constantly evolving with new technologies, I am dedicated to writing clean, maintainable code and delivering innovative digital solutions.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Spring Boot</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        {/* <hr/> */}
        <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr/> */}
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
    </div>
    </div>
  );
};

export default About;
