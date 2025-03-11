import React, { useState, useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css';
import plogo from '../../assets/portfolio/pinterest.png';
import underline from '../../assets/portfolio/underline.png';
import { MenuOutlined, CloseOutlined} from "@ant-design/icons";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track window resize to update mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu if switching to desktop view
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id='home' className="navbar">
      <img src={plogo} alt="Logo" className="logo" />

      {/* Mobile Menu Toggle Icon - Show only in mobile view */}
      {isMobile && !isOpen && (
        <MenuOutlined className="nav-mob-open" onClick={() => setIsOpen(true)} />
      )}

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        {/* Close Button inside Mobile Menu */}
        {isMobile && isOpen && (
          <CloseOutlined className="nav-mob-close" onClick={() => setIsOpen(false)} />
        )}
        {[
        { name: "home", label: "Home" },
        { name: "about", label: "About Me" },
        { name: "services", label: "Services" },
        { name: "work", label: "Portfolio" },
        { name: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.name} className="nav-item">
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href={`#${item.name}`} 
              onClick={() => {
                setMenu(item.name);
                setIsOpen(false); // Close the mobile menu when an item is clicked
              }}>
              <p>{item.label}</p>
            </AnchorLink>
            {menu === item.name && <img src={underline} alt="underline" className="underline" />}
          </li>
        ))}
      </ul>
      {/* Desktop 'Connect' Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
