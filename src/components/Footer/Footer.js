import React from 'react';
import './Footer.css';
import logo1 from'../../assets/logo1.svg';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo1} alt="" />
          <p>I'm a Mechanical Engineering Graduate who actively pursuing a position in frontend development to leverage my skills in HTML, CSS, JavaScript and React.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder = "Enter your email" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        &copy; {currentYear} Jaanageswar S. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
