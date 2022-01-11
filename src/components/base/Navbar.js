import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <div className="navbar">
          <Link className="nav-item nav-link active text-light" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link active text-light" to="about">
            About
          </Link>
          <Link className="nav-item nav-link active text-light" to="contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
