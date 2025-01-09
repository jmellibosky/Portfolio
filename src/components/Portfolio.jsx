import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import Flag from 'react-flagkit'
import Home from './Home';
import i18n from '../scripts/i18n';

export default function Portfolio() {
    const [language, setLanguage] = useState('es');
    const [currentUrl, setCurrentUrl] = useState('/');
    const [previousUrl, setPreviousUrl] = useState('/');
    
    const navigate = useNavigate();
    
    const handleReturnClick = () => {
        navigate(previousUrl);
        
        setCurrentUrl(previousUrl);
        setPreviousUrl('/');
    }

    const handleLanguageClick = (language) => {
        i18n.changeLanguage(language);
        setLanguage(language);
    }

    const handleNavigation = (url) => {
        navigate(url);
        
        setCurrentUrl(url);
        setPreviousUrl(url.startsWith('/projects/') ? '/projects' : '/');
    }

    return (
        <div className="container-fluid">
            <div id="main-card" className="col-lg-6 col-md-10">
                <div className="row" id="card-header">
                    <div className="col" style={{display: (currentUrl === '/' ? "none" : "block")}}>
                        <div className="card-btn" onClick={() => handleReturnClick()}>
                            <FaAngleLeft />
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-end">
                            <div className="card-btn" onClick={() => handleLanguageClick('en')}>
                                <Flag country="GB" className="flag-icon" />
                            </div>
                            <div className="card-btn" onClick={() => handleLanguageClick('es')}>
                                <Flag country="ES" className="flag-icon" />
                            </div>
                            <div className="card-btn" onClick={() => handleLanguageClick('de')}>
                                <Flag country="DE" className="flag-icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home handleNavigation={handleNavigation}/>} />
                    <Route path="/about" element="" />
                    <Route path="/projects" element="" />
                    <Route path="/projects/arcade" element="" />
                    <Route path="/projects/airspace" element="" />
                    <Route path="/projects/education" element="" />
                    <Route path="/projects/economy" element="" />
                    <Route path="/contact" element="" />
                </Routes>
            </div>
        </div>
    );
}