import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); 

  // Quando il cursore entra nell'area contenente hamburger e menu
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  // Quando il cursore lascia l'area contenente hamburger e menu
  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  // Chiude il menu dopo un click sul link di navigazione
  const handleNavClick = () => {
    setShowMenu(false);
  };

  // Stile del contenitore che racchiude hamburger e menu (fisso in alto a sinistra)
  const containerStyle = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 2000,
  };

  // Stile dell'hamburger (le 3 linee)
  const hamburgerStyle = {
    cursor: 'pointer',
  };

  const lineStyle = {
    width: '30px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '5px 0',
  };

  // Menu a tendina
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

  // Evita di mostrare la voce di menu corrispondente alla pagina corrente
  const filteredMenuItems = menuItems.filter(item => item.path !== location.pathname);

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hamburger con aggiunta dell'onClick per dispositivi touch */}
      <div style={hamburgerStyle} onClick={() => setShowMenu(prev => !prev)}>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
        <div style={lineStyle}></div>
      </div>

      {/* Menu a tendina */}
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
