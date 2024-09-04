import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSuitcase, faFileAlt, faBook, faChartLine, faUser, faEnvelope, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

const VerticalNavbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };


    return (
        <nav className="vertical-navbar">
            <ul className="navbar-nav">
                <li className={`nav-item ${activeMenu === 'menu' ? 'expanded' : ''}`}>
                    <a className="nav-link" href="/Body" onClick={(e) => { e.preventDefault(); toggleMenu('menu'); }}>
                        <FontAwesomeIcon icon={faHome} className="nav-icon" />
                        <span className="nav-text">Menu</span>
                    </a>
                    <div className={`sub-menu ${activeMenu === 'menu' ? 'open' : ''}`}>
                        <a className="sub-nav-link" href="/Body">login</a>
                        <a className="sub-nav-link" href="/">register</a>
                        <a className="sub-nav-link" href="/">Forgot Password</a>
                        <a className="sub-nav-link" href="/">Change Password</a>
                    </div>
                </li>
                {/* <li className={`nav-item ${activeMenu === 'pages' ? 'expanded' : ''}`}> */}
                    <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); toggleMenu('pages'); }}>
                        <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                        <span className="nav-text">Pages</span>
                    </a>
                    <div className={`sub-menu ${activeMenu === 'pages' ? 'open' : ''}`}>
                        <a className="sub-nav-link" href="/">Page1</a>
                        <a className="sub-nav-link" href="/">Page2</a>
                        <a className="sub-nav-link" href="/">Page3</a>
                        <a className="sub-nav-link" href="/">Page4</a>
                    </div>
                {/* </li> */}
                <li className={`nav-item ${activeMenu === 'applications' ? 'expanded' : ''}`}>
                    <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); toggleMenu('applications'); }}>
                        <FontAwesomeIcon icon={faSuitcase} className="nav-icon" />
                        <span className="nav-text">Applications</span>
                    </a>
                    <div className={`sub-menu ${activeMenu === 'applications' ? 'open' : ''}`}>
                        <a className="sub-nav-link" href="/">App1</a>
                        <a className="sub-nav-link" href="/">App2</a>
                        <a className="sub-nav-link" href="/">App3</a>
                        <a className="sub-nav-link" href="/">App4</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faBook} className="nav-icon" />
                        <span className="nav-text">Docs</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faChartLine} className="nav-icon" />
                        <span className="nav-text">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faUser} className="nav-icon" />
                        <span className="nav-text">My Courses</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
                        <span className="nav-text">Messages</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Alerts">
                        <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
                        <span className="nav-text">Reports</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faCog} className="nav-icon" />
                        <span className="nav-text">Settings</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;

