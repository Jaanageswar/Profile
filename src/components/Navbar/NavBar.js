import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo1 from'../../assets/logo1.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const NavBar = () => {
  const[menu,setmenu] = useState("Home");
  const menuRef =useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
    menuRef.current.setAttribute("aria-hidden", "false");/*added*/
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    menuRef.current.setAttribute("aria-hidden", "true");/*added*/

  }
  return (
    <div className='navbar'>
      <img className ='logo' src = {logo1} alt="Logo" />
      {/* Added aria-label for accessibility in the below img tag */}
      <img onClick={openMenu} className = "nav-mob-open" src= {menu_open} alt="Open Menu" aria-label="Open Menu"/> 
      <ul ref = {menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt="Close Menu" className="nav-mob-close" aria-label="Close Menu"/>
        <li><AnchorLink className ="anchor-link" offset={50} href='#Home'><p onClick={() => setmenu("Home")}>Home</p></AnchorLink>{menu === 'Home'?<img src = {underline} alt=''/>:<></>}</li>
        <li><AnchorLink className ="anchor-link" offset={50} href='#About me'><p onClick={() => setmenu("About Me")}>About Me</p> </AnchorLink>{menu === 'About Me'?<img src = {underline} alt=''/>:<></>}</li>
        <li><AnchorLink className ="anchor-link" offset={50} href='#Resume'><p onClick={() => setmenu("Resume")}>Resume</p></AnchorLink>{menu === 'Resume'?<img src = {underline} alt=''/>:<></>}</li>
        <li><AnchorLink className ="anchor-link" offset={50} href='#Contact'><p onClick={() => setmenu("Contact")}>Contact</p></AnchorLink>{menu === 'Contact'?<img src = {underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className ="anchor-link" offset={50} href='#Contact'>
          <p onClick={() => setmenu("Contact")}>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  )
}

export default NavBar
