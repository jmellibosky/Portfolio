import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import Flag from 'react-flagkit'

export function PortfolioWrapper() {
    const navigate = useNavigate();
    return (
        <Portfolio navigate={navigate} />
    );
}

export class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'en',
            currentUrl: '/',
            previousUrl: '/'
        }

        this.handleReturnClick = this.handleReturnClick.bind(this);
        this.handleLanguageClick = this.handleLanguageClick.bind(this);
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleReturnClick() {
        this.props.navigate(this.state.previousUrl);
        this.setState((state) => ({
            currentUrl: state.previousUrl,
            previousUrl: '/'
        }));
    }

    handleLanguageClick(language) {
        this.setState({
            language: language
        });
    }

    handleNavigation(url) {
        this.props.navigate(url);
        this.setState({
            currentUrl: url,
            previousUrl: (url.startsWith('/projects/') ? '/projects' : '/')
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div id="main-card" className="col-lg-6 col-md-10">
                    <div className="row">
                        <div className="col" style={{display: (this.state.currentUrl === '/' ? "none" : "block")}}>
                            <div className="card-btn" onClick={() => this.handleReturnClick()}>
                                <FaAngleLeft />
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-end">
                                <div className="card-btn" onClick={() => this.handleLanguageClick('en')}>
                                    <Flag country="GB" className="flag-icon" />
                                </div>
                                <div className="card-btn" onClick={() => this.handleLanguageClick('es')}>
                                    <Flag country="ES" className="flag-icon" />
                                </div>
                                <div className="card-btn" onClick={() => this.handleLanguageClick('de')}>
                                    <Flag country="DE" className="flag-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Routes>
                        <Route path="/" element="" />
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
}