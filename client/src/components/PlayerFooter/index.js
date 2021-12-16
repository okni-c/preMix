import React from 'react';
import { Link } from 'react-router-dom';
import Art from '../../images/album-art.jpeg';

import Song from '../../mp3/songtest.mp3';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Footer = () => {
    return (
        <footer className="player-footer fixed-bottom d-flex">
            {/* Album art and text */}
            <div className="footer-info row">
                <img src={Art} className="footer-art col-6" />
                <div className="footer-song col-6">
                    <div className="col-12 footer-title">My Own Way</div>
                    <div className="col-12 footer-artist">okni!</div>
                </div>
            </div>

            <div className="flex-grow-1">
                <AudioPlayer
                    src={Song}
                    layout="stacked-reverse"
                    onPlay={e => console.log("onPlay")} />
            </div>
        </footer>
    );
};

export default Footer;
