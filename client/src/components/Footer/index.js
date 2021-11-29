import React from 'react';
import { Link } from 'react-router-dom';
import LightWave from '../../images/logo-wave-light.png';

const Footer = () => {
  return (
    <footer>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/"><img src={LightWave} alt="" width="auto" height="50" className="d-inline-block align-text-top nav-logo" /><span className="nav-logo-txt white">premix</span></Link>
        </div>

        <div class="justify-content">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link white" href="https://github.com/okni-c/preMix/blob/cd17d9ed6fd6448cb17a3ea709e5ceacada4b16c/CODE_OF_CONDUCT.md">C.O.C.</a>
            </li>
            <li class="nav-item">
              <a className="nav-link white" href="https://github.com/okni-c/preMix">Contribute</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
