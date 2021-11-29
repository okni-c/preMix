import React from 'react';
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
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/"><img src={DarkWave} alt="" width="auto" height="50" className="d-inline-block align-text-top nav-logo" /><span className="nav-logo-txt">premix</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/discover">Discover</Link>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#about">About us</a>
              </li>
              <li class="nav-item">
                <div className="vl"></div>
              </li>

              {Auth.loggedIn() && userData ? (
                <>
                  <li class="nav-item">
                    <Link className="nav-link" to="/profile">{userData.me.username}</Link>
                  </li>
                  <li class="nav-item">
                    <a className="nav-link" href="/" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link className="nav-link" to="/signup">Sign up</Link>
                  </li>
                  <li class="nav-item">
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
