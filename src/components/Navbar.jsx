import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); 

  const handleMouseEnter = () => {
    setShowMenu(true);
  };


  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  
  const handleNavClick = () => {
    setShowMenu(false);
  };

  const containerStyle = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 2000,
  };

  const hamburgerStyle = {
    cursor: 'pointer',
  };

  const lineStyle = {
    width: '30px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '5px 0',
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '28px',
    left: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '4px',
    padding: '10px',
  };

  const navItemStyle = {
    color: '#fff',
    fontSize: '1.2rem',
    margin: '10px 0',
    textDecoration: 'none',
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/Clienti", label: "Clienti" },
    { path: "/prodotti", label: "Prodotti" },
    { path: "/about", label: "About" }
  ];

  
  const filteredMenuItems = menuItems.filter(item => item.path !== location.pathname);

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={hamburgerStyle} onClick={() => setShowMenu(prev => !prev)}>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
      </div>

      {showMenu && (
        <div style={dropdownMenuStyle}>
          <Nav className="flex-column">
            {filteredMenuItems.map(item => (
              <Nav.Link
                as={Link}
                to={item.path}
                style={navItemStyle}
                key={item.path}
                onClick={handleNavClick}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      )}
    </div>
  );
};

export default CustomNavbar;
