import React, { useState } from 'react';
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="sm" className="navbar-main"> 
      <div className="container">
        <a className="navbar-brand">
          LOGO
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <ul className="navbar-nav ml-auto">
            <li>
              <a className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link">
                My Portfolio  
              </a>
            </li>
            <li>
              <a className="nav-link">
                Clients
              </a>
            </li> 
          </ul>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
