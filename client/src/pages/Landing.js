import React from "react";
import { Link } from 'react-router-dom';
import AboutWave from '../images/about-wave.png';
import AboutPpl from '../images/about-ppl.png';

import Header from '../components/Header';

const Landing = () => {

    return (
        <>
        <Header />
        <main>
            {/* Hero Section */}
            <div className="hero-background">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="col-12 hero-header">Beta test your sound.</h1>
                        <p className="col-12 hero-subtitle">Share your tracks, discover new ones, and find your next sample.</p>
                        <Link to="/discover" className="btn hero-btn">Discover</Link>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container">
                <div className="row text-center">
                    <h1 className="col-12 abt-header" id="about">About Us</h1>

                    {/* First section */}
                    <div className="row">
                        <div className="col-6 abt-section">
                            <h3 className="abt-title">What is premix?</h3>
                            <p className="abt-p">Premix is a community driven application for aspiring and seasoned music producers to share draft songs, get feedback on ideas, collaborate, create and share samples, etc.</p>
                        </div>


                        <div className="col-6">
                            <img src={AboutWave} className="" />
                        </div>
                    </div>


                    {/* Second section */}
                    <div className="row abt-spacer">
                        <div className="col-6">
                            <img src={AboutPpl} className="abt-ppl-img" />
                        </div>

                        <div className="col-6" style={{paddingLeft: '108px'}}>
                            <h3 className="abt-title">Why make it?</h3>
                            <p className="abt-p">The very idea of Premix was created by people just like you. We wanted to have an amazing place to test ideas and look for inspiration. Developed by music producers, for music producers.</p>
                        </div>
                    </div>

                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main >
        </>
    );
};

export default Landing;