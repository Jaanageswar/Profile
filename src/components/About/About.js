import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import photo from '../../assets/photo.png'

const About = () => {
  return (
    <div className='about' id='About me'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Decorative pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src = {photo} alt="Jaanageswar S's profile" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm a Mechanical Engineering Graduate who actively pursuing a position in frontend development to leverage my skills in HTML, CSS, JavaScript and React.</p>
                <p>My goal is to create intuitive and responsive user interfaces that enhance user experience. I am eager to contribute to innovative projects and grow within a dynamic tech environment.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style = {{width : '50%'}}/></div>
                <div className="about-skill"><p>React JS</p><hr style = {{width : '60%'}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style = {{width : '65%'}}/></div>
                <div className="about-skill"><p>Python</p><hr style = {{width : '70%'}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievevment">
          <h1>1</h1>
          <p>Python Certification</p>
        </div>
        <hr />
        <div className="about-achievevment">
          <h1>10K+</h1>
          <p>Naukri Points</p>
        </div>
        <hr />
        <div className="about-achievevment">
          <h1>1</h1>
          <p>Internship Certification</p>
        </div>
      </div>
    </div>
  )
}

export default About
