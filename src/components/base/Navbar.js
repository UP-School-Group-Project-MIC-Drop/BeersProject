import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className="nav navbar-light bg-warning border-bottom border-dark border-2 justify-content-center">
        <div className="navbar">
          <Link className="nav-item nav-link active text-dark fw-bold" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link active text-dark fw-bold" to="about">
            About
          </Link>
          <Link className="nav-item nav-link active text-dark fw-bold" to="contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
