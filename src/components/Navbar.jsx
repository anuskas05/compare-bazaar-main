import React, { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import './Navbar.css';
import image from '../assets/images/ICON2.png'; // Adjust the path to your image
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 1024;
      setIsMobile(newIsMobile);

      // Close mobile menu if switching to desktop
      if (!newIsMobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle dropdown toggling
  const handleDropdownToggle = (dropdown) => {
    if (isMobile) {
      // In mobile, toggle the dropdown
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    } else {
      // In desktop, just set the active dropdown
      setActiveDropdown(dropdown);
    }
  };

  // Handle nav item clicking
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);

    if (item === 'home') {
      // Home has no dropdown, close any open dropdown
      setActiveDropdown(null);
    } else if (isMobile) {
      // On mobile, toggle the dropdown
      handleDropdownToggle(item);
    }

    // If mobile and clicking a nav item, don't close the menu
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  };

  // Handle mouse enter for desktop hover effect
  const handleMouseEnter = (dropdown) => {
    if (!isMobile) {
      setActiveDropdown(dropdown);
    }
  };

  // Handle mouse leave for desktop
  const handleMouseLeave = () => {
    if (!isMobile && !activeNavItem) {
      setActiveDropdown(null);
    }
  };

  return (
    <div ref={navbarRef} onMouseLeave={handleMouseLeave}>
      <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        {/* Main Navigation */}
        <div className="navbar-inner">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <a href="/" className="logo-link">
                <div className="logo-text">
                  <div className="nav-img">
                    <img src={image} alt="Description" className="w-20 h-15 ml-1 rounded-lg " />
                    </div>
                    <img 
       src="/images/icon1new.png" 
         alt="Logo" 
       className="h-30 w-50 -ml-1 object-contain mx-2 transition-transform hover:scale-105" 
      />
      </div>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="navbar-links">
              {/* Home */}
              {/* Home */}
              <div className="nav-item-container ">
                <Link
                  to="/" // Link to the home route
                  className={`nav-item ${activeNavItem === 'home' ? 'active' : ''} ${activeDropdown === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('home')}
                  onMouseEnter={() => handleMouseEnter('home')}
                >
                  Home
                </Link>
              </div>

              {/* Marketing */}
              <div className="nav-item-container">
                <Link
                  className={`nav-item ${activeNavItem === 'marketing' ? 'active' : ''} ${activeDropdown === 'marketing' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('marketing')}
                  onMouseEnter={() => handleMouseEnter('marketing')}
                >
                  Marketing
                  <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
              </div>

              {/* Technology */}
              <div className="nav-item-container">
                <Link
                  className={`nav-item ${activeNavItem === 'technology' ? 'active' : ''} ${activeDropdown === 'technology' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('technology')}
                  onMouseEnter={() => handleMouseEnter('technology')}
                >
                  Technology
                  <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
              </div>
              {/* latest blog */}
              <div className="nav-item-container">
                <Link
                  className={`nav-item ${activeNavItem === 'blog' ? 'active' : ''} ${activeDropdown === 'blog' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('blog')}
                  onMouseEnter={() => handleMouseEnter('blog')}
                >
                  Resources
                  <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
              </div>


              {/* Sales */}
              <div className="nav-item-container">
                <Link
                  className={`nav-item ${activeNavItem === 'sales' ? 'active' : ''} ${activeDropdown === 'sales' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('sales')}
                  onMouseEnter={() => handleMouseEnter('sales')}
                >
                  Sales
                  <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
              </div>

              {/* Contact Us */}
              <div className="nav-item-container">
                <Link
                  className={`nav-item ${activeNavItem === 'contact' ? 'active' : ''} ${activeDropdown === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavItemClick('contact')}
                  onMouseEnter={() => handleMouseEnter('contact')}
                >
                  Contact Us
                  <svg className="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="hamburger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
          <div className="mobile-menu-inner">
            {/* Home */}
            <div className="mobile-menu-item">
              <Link
                to="/" // Link to the home route
                className={`mobile-menu-button-item ${activeNavItem === 'home' ? 'active' : ''}`}
                onClick={() => {
                  setActiveNavItem('home'); // Update the active nav item
                  setMobileMenuOpen(false); // Close the mobile menu after clicking
                }}
              >
                <span className={`mobile-menu-text ${activeNavItem === 'home' ? 'mobile-menu-text-blue' : ''}`}>
                  Home
                </span>
              </Link>
            </div>
            {/* Marketing */}
            <div className="mobile-menu-item">
              <button
                className={`mobile-menu-button-item ${activeNavItem === 'marketing' ? 'active' : ''}`}
                onClick={() => handleNavItemClick('marketing')}
              >
                <span className={`mobile-menu-text ${activeNavItem === 'marketing' ? 'mobile-menu-text-blue' : ''}`}>
                  Marketing
                </span>
                <svg className={`mobile-dropdown-arrow ${activeDropdown === 'marketing' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'marketing' && (
                <div className="mobile-dropdown-content">
                  {/* Marketing dropdown content */}
                  <div className="mobile-dropdown-category">

                    <ul className="category-items">
                      <li><a href="/BestCRMSoftware" className="category-item-link">Best CRM Software</a></li>
                      <li><a href="/EmailMarketing" className="category-item-link">Best Email Marketing Services</a></li>
                      <li><a href="/marketing/seo" className="category-item-link">Best Website Building Platform</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Technology */}
            <div className="mobile-menu-item">
              <button
                className={`mobile-menu-button-item ${activeNavItem === 'technology' ? 'active' : ''}`}
                onClick={() => handleNavItemClick('technology')}
              >
                <span className={`mobile-menu-text ${activeNavItem === 'technology' ? 'mobile-menu-text-blue' : ''}`}>
                  Technology
                </span>
                <svg className={`mobile-dropdown-arrow ${activeDropdown === 'technology' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'technology' && (
                <div className="mobile-dropdown-content">
                  {/* Technology dropdown content */}
                  <div className="mobile-dropdown-category">

                    <ul className="category-items">
                      <li><a href="/phone-systems" className="category-item-link">Busines Phone System</a></li>
                      <li><a href="/GpsFleetMangement" className="category-item-link">GPS Fleet Management Software</a></li>
                      <li><a href="/BestEmployeeMangementSoftware" className="category-item-link">Best Employee Management Software</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* Resources */}
            <div className="mobile-menu-item">
              <button
                className={`mobile-menu-button-item ${activeNavItem === 'resources' ? 'active' : ''}`}
                onClick={() => handleNavItemClick('resources')}
              >
                <span className={`mobile-menu-text ${activeNavItem === 'resources' ? 'mobile-menu-text-blue' : ''}`}>
                  Resources
                </span>
                <svg className={`mobile-dropdown-arrow ${activeDropdown === 'resources' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="mobile-dropdown-content">
                  {/* Technology dropdown content */}
                  <div className="mobile-dropdown-category">

                    <ul className="category-items">
                      <li><a href="/WhitePaperList" className="category-item-link">WhitePaper</a></li>
                      <li><a href="/Blogs" className="category-item-link">Blogs</a></li>
                      
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sales */}
            <div className="mobile-menu-item">
              <button
                className={`mobile-menu-button-item ${activeNavItem === 'sales' ? 'active' : ''}`}
                onClick={() => handleNavItemClick('sales')}
              >
                <span className={`mobile-menu-text ${activeNavItem === 'sales' ? 'mobile-menu-text-blue' : ''}`}>
                  Sales
                </span>
                <svg className={`mobile-dropdown-arrow ${activeDropdown === 'sales' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'sales' && (
                <div className="mobile-dropdown-content">
                  {/* Sales dropdown content */}
                  <div className="mobile-dropdown-category">

                    <ul className="category-items">
                      <li><a href="/BestCRMSoftware" className="category-item-link">Best CRM Software</a></li>
                      <li><a href="/Callcenter" className="category-item-link">Best Call Center Management Software</a></li>
                      <li><a href="/BestProjectManagement" className="/BestProjectManagement">Best Project Management Software</a></li>
                     
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <div className="mobile-menu-item">
              <button
                className={`mobile-menu-button-item ${activeNavItem === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavItemClick('contact')}
              >
                <span className={`mobile-menu-text ${activeNavItem === 'contact' ? 'mobile-menu-text-blue' : ''}`}>
                  Contact Us
                </span>
                <svg className={`mobile-dropdown-arrow ${activeDropdown === 'contact' ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'contact' && (
                <div className="mobile-dropdown-content">
                  {/* Contact dropdown content */}
                  <div className="mobile-dropdown-category">

                    <ul className="category-items">
                      <li><a href="/contact-sales" className="category-item-link">Contact</a></li>
                      <li><a href="/About us" className="category-item-link">About</a></li>
                      <li><a href="/Careers" className="category-item-link">Career</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdowns */}
      {!isMobile && (
        <Dropdown
          activeDropdown={activeDropdown}
          isMobile={isMobile}
          setActiveDropdown={setActiveDropdown}
        />
      )}
    </div>
  );
};

export default Navbar;