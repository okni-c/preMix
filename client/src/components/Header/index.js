import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC } from '../../utils/queries';
import logo from '../../images/logo.png';

const Header = () => {

  const { data: userData } = useQuery( QUERY_ME_BASIC );

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div style={{ paddingTop: 9 }}>
          <Link to="/">
            <img className="logo-nav" src={logo} alt="" />
          </Link>
        </div>

        <nav className="text-center">
          {Auth.loggedIn() && userData ? (
            <>
              <Link to="/profile">{userData.me.username}</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
