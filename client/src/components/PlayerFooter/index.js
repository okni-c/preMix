import React from 'react';
import { Link } from 'react-router-dom';
import LightWave from '../../images/logo-wave-light.png';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      {/* <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">

        <div class="justify-content">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link white" href="https://github.com/okni-c/preMix/blob/cd17d9ed6fd6448cb17a3ea709e5ceacada4b16c/CODE_OF_CONDUCT.md">C.O.C.</a>
            </li>
          </ul>
        </div>
        </div>
      </nav> */}
      <AudioPlayer />
    </footer>
  );
};

export default Footer;
