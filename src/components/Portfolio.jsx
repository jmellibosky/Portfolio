import React, { useState } from 'react';

// Navigation
import { Routes, Route, useNavigate } from 'react-router-dom'

// Icons & Flags
import { FaAngleLeft } from 'react-icons/fa'
import Flag from 'react-flagkit'

// Internationalization
import i18n from '../scripts/i18n';
import { useTranslation } from 'react-i18next';

// Portfolio Components
import Home from './Home';
import Projects from './Projects';
import DemoTemplate from './DemoTemplate';
import Airspace from './demos/Airspace';
import Arcade from './demos/Arcade';
import Economy from './demos/Economy';
import Education from './demos/Education';

export default function Portfolio() {
    const [language, setLanguage] = useState('en');
    const [currentUrl, setCurrentUrl] = useState('/');
    const [previousUrl, setPreviousUrl] = useState('/');

    const { t } = useTranslation();
    
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
            <div id="main-card" className="col-lg-7 col-md-10">
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
                    <Route path="/projects" element={<Projects handleNavigation={handleNavigation}/>} />
                    <Route path="/projects/airspace" element={<DemoTemplate title={t('airspace_reservation')} ProjectDemo={Airspace} />} />
                    <Route path="/projects/arcade" element={<DemoTemplate title={t('arcade_automation')} ProjectDemo={Arcade} />} />
                    <Route path="/projects/economy" element={<DemoTemplate title={t('economics_management')} />} ProjectDemo={Economy} />
                    <Route path="/projects/education" element={<DemoTemplate title={t('institution_management')} ProjectDemo={Education} />} />
                    <Route path="/contact" element="" />
                </Routes>
            </div>
        </div>
    );
}