import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../../utils/queries';

import DDArrow from '../../images/profile-arw.png';
import DarkWave from '../../images/logo-wave-dark.png';

const Header = () => {

  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={DarkWave} alt="" width="auto" height="50" className="d-inline-block align-text-top nav-logo" /><span className="nav-logo-txt">premix</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/discover">Discover</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#about">About us</Link>
              </li>
              <li className="nav-item">
                <div className="vl"></div>
              </li>

              {Auth.loggedIn() && userData ? (
                <>
                <li className="profile-nav-item">
                  <div className="dropdown">
                  <a className="d-flex" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="profile-nav-arw"><img className="dd-arrow" src={DDArrow} /></div>
                    <div className="profile-nav-btn"></div>
                  </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                      <li><Link className="dropdown-item" to="/profile">{userData.me.username}</Link></li>
                      <li><a className="dropdown-item danger" href="/" onClick={logout}>Log out</a></li>
                    </ul>
                  </div>
                </li>
              </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav >
    </header>
  );
};

export default Header;
