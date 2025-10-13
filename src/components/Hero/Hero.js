import React from 'react';
import photo from '../../assets/photo.png';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import JaanageswarResume from './Jaanageswar_S.pdf'
const Hero = () => {
  return (
    <div className='hero' id='Home'>
      <img className = 'photo' src={photo} alt="Profile photo of Jaanageswar S" />
      <h1>I'm Jaanageswar S</h1>
      <p>Motivated and enthusiastic individual with hands-on experience in Machine Learning, SAP AI, and Web Development. Skilled in building AI-driven solutions and web applications. Have explored and worked with emerging technologies such as LangChain, Knowledge Graphs, Vector Databases, Prompt Engineering, and various no-code/low-code platforms.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className = "anchor-link" offset = {50} href='#Contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a style = {{textDecoration:'none',color:'white'}} href={JaanageswarResume} download >Download Resume</a>
        </div>
      </div>
    </div>
  )
} 

export default Hero
