import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo1 from'../../assets/logo1.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const NavBar = () => {
  const[menu,setmenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const menuRef =useRef();
  const navigationTimeoutRef = useRef(null);

  const openMenu = () => {
    menuRef.current.classList.add('nav-menu-open');
    menuRef.current.setAttribute("aria-hidden", "false");
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    menuRef.current.classList.remove('nav-menu-open');
    menuRef.current.setAttribute("aria-hidden", "true");
    setIsMenuOpen(false);
  }

  const handleNavigation = (menuName) => {
    // Clear any existing timeout
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    
    // Set the menu immediately
    setmenu(menuName);
    closeMenu();
    
    // Set navigating state
    setIsNavigating(true);
    
    // Set timeout to re-enable scroll detection
    navigationTimeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
      navigationTimeoutRef.current = null;
    }, 2000);
  }

  // Function to update active menu based on scroll position
  const updateActiveMenu = () => {
    // Don't update during navigation to prevent double underlines
    if (isNavigating) return;
    
    const sections = ['Home', 'About me', 'Resume', 'Contact'];
    const scrollPosition = window.scrollY + 150; // Increased offset for sticky navbar

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const elementBottom = elementTop + elementHeight;
        
        // Check if scroll position is within this section
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          const menuName = sections[i] === 'About me' ? 'About Me' : sections[i];
          setmenu(menuName);
          break;
        }
        // Also check if we're at the very top of a section
        else if (scrollPosition >= elementTop - 100 && scrollPosition < elementTop + 100) {
          const menuName = sections[i] === 'About me' ? 'About Me' : sections[i];
          setmenu(menuName);
          break;
        }
      }
    }
  }

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Only update if not navigating
      if (!isNavigating) {
        updateActiveMenu();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavigating]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);
  return (
    <div className='navbar'>
      <img className ='logo' src = {logo1} alt="Logo" />
      {/* Added aria-label for accessibility in the below img tag */}
      {!isMenuOpen && <img onClick={openMenu} className = "nav-mob-open" src= {menu_open} alt="Open Menu" aria-label="Open Menu"/>}
      <ul ref = {menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt="Close Menu" className="nav-mob-close" aria-label="Close Menu"/>
        <li><AnchorLink className ="anchor-link" offset={120} href='#Home'><p onClick={() => handleNavigation("Home")}>Home</p></AnchorLink><img src = {underline} alt='' className={menu === 'Home' ? 'show' : ''}/></li>
        <li><AnchorLink className ="anchor-link" offset={120} href='#About me'><p onClick={() => handleNavigation("About Me")}>About Me</p> </AnchorLink><img src = {underline} alt='' className={menu === 'About Me' ? 'show' : ''}/></li>
        <li><AnchorLink className ="anchor-link" offset={120} href='#Resume'><p onClick={() => handleNavigation("Resume")}>Resume</p></AnchorLink><img src = {underline} alt='' className={menu === 'Resume' ? 'show' : ''}/></li>
        <li><AnchorLink className ="anchor-link" offset={120} href='#Contact'><p onClick={() => handleNavigation("Contact")}>Contact</p></AnchorLink><img src = {underline} alt='' className={menu === 'Contact' ? 'show' : ''}/></li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className ="anchor-link" offset={50} href='#Contact'>
          <p onClick={() => handleNavigation("Contact")}>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  )
}

export default NavBar
