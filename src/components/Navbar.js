import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faGear, faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const NavItem = ({ icon, label, to, isActive }) => (
  <Link
    to={to}
    className={`nav-item ${isActive ? 'active' : ''}`}
  >
    <FontAwesomeIcon icon={icon} />
    <span>{label}</span>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', icon: faHouse, to: '/' },
    { label: 'Profile', icon: faUser, to: '/profile' },
    { label: 'Settings', icon: faGear, to: '/settings' },
    { label: 'About Us', icon: faGear, to: '' },
    { label: 'About Us', icon: faGear, to: '' },
    { label: 'About Us', icon: faGear, to: '' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">MyApp</h1>
          <div className="navbar-items">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isActive={location.pathname === item.to}
              />
            ))}
          </div>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="sidebar-items">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isActive={location.pathname === item.to}
            />
          ))}
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;