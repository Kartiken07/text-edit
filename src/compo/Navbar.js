import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ navname = 'Navbar', mode = 'light', togglemode }) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Textform" style={{ color: mode === 'light' ? 'black' : 'white' }}>
          {navname}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: mode === 'light' ? 'black' : 'white' }}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                style={{ color: mode === 'light' ? 'black' : 'white' }}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" style={{ backgroundColor: mode === 'light' ? 'white' : 'black' }}>
                <li>
                  <Link className="dropdown-item" to="/" style={{ color: mode === 'light' ? 'black' : 'white' }}>
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/" style={{ color: mode === 'light' ? 'black' : 'white' }}>
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/" style={{ color: mode === 'light' ? 'black' : 'white' }}>
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              onClick={togglemode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navname: PropTypes.string,
  mode: PropTypes.string,
  togglemode: PropTypes.func.isRequired,
};
