import React from 'react';
import { useSidebar } from '../context/SidebarContext';

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar(); 

  return (
    <header className={`header ${isSidebarOpen ? 'left-pd' : ''}`} id="header">
      <div className="header__container">
        <a href="!#" className="header__logo">
          <i className="ri-tent-fill"></i>
          <span>malarmus V.1.1</span>
        </a>

        <div className="button header__toggle" id="header-toggle" onClick={toggleSidebar}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
