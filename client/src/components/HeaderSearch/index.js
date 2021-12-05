import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../../utils/queries';

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

          <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <div className="flex-grow-1">
              <form>
                <input class="form-control searchbar" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>

            <ul className="navbar-nav">
              {Auth.loggedIn() && userData ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">{userData.me.username}</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" onClick={logout}>
                      Logout
                    </a>
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
