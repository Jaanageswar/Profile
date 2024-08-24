import React from 'react';
import photo from '../../assets/photo.png';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className='hero' id='Home'>
      <img className = 'photo' src={photo} alt="" />
      <h1>I'm Jaanageswar S</h1>
      <p>"Striving to join a reputed company to enhance my skills while effectively completing assigned tasks and contributing to the team."</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className = "anchor-link" offset = {50} href='#Contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
} 

export default Hero
