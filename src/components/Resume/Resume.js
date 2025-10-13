import React from 'react'
import './Resume.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import JaanageswarResume from './Jaanageswar_S.pdf'
const Resume = () => {
  return (
    <div className='resume' id='Resume'>
        <div className="resume-title">
            <h1>Resume</h1>
            <img src={theme_pattern} alt="Decorative pattern" />
        </div>
        <div className="resume-text">
            <p className="resume-para">Please find my resume attached below, detailing my personal information, educational background, and professional skills. To download the document, kindly click the button below.</p>
        </div>
        <div className= 'resume-submit'>
          <a style = {{textDecoration:'none',color:'white'}}href={JaanageswarResume} download className="download-button">
          My Resume
          </a>
        </div>
    </div>
  )
}

export default Resume