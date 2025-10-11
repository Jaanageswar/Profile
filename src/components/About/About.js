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
                <p>Hi! I'm Jaanageswar S, a passionate Mechanical Engineering graduate who has successfully transitioned into the world of technology. With hands-on experience in Machine Learning, SAP AI, and Web Development, I specialize in creating innovative solutions that bridge the gap between traditional engineering and cutting-edge technology.</p>
                <p>During my internships at IT Resonance and Shiash Info Solutions, I gained extensive experience working with RAG systems, LangChain, SAP Fiori, CAPM, Cursor AI, and Large Language Models. I've also explored no-code/low-code platforms including n8n, LangFlow, and Flowise, while developing machine learning models for real-world applications.</p>
                <p>My expertise spans across emerging technologies such as Knowledge Graphs, Prompt Engineering, Vector Databases, and AI-driven automation. I'm passionate about leveraging these technologies to solve complex problems and create impactful solutions that drive digital transformation.</p>
            </div>
            <div className="about-github">
                <p>To know about my projects</p>
                <a href="https://github.com/Jaanageswar" target="_blank" rel="noopener noreferrer" className="github-button">
                    View My GitHub
                </a>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievevment">
          <h1>6+</h1>
          <p>Months Experience</p>
        </div>
        <hr />
        <div className="about-achievevment">
          <h1>2</h1>
          <p>Internships Completed</p>
        </div>
        <hr />
        <div className="about-achievevment">
          <h1>1</h1>
          <p>Ongoing Course</p>
        </div>
        <hr />
        <div className="about-achievevment">
          <h1>12+</h1>
          <p>Technologies Worked With</p>
        </div>
      </div>
    </div>
  )
}

export default About
