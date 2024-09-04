import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/index.js';
import VerticalNavbar from './components/VerticalNavbar/index.js';
import Body from './components/Body/index.js';
import CourseList from './components/Courselist/index.js';

import TestSchedule from './components/TestSchedule/index.js';
import './App.css';  // Import a CSS file for styles


const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                {/* Sidebar */}
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <VerticalNavbar />
                </div>
                
                {/* Main Content */}
                <div className="main-content">
                    <Header onMenuClick={toggleSidebar} />
                    <div className="content p-3">
                        <Routes>
                            {/* <Route path="/" element={<CourseList />} /> */}
                            <Route path="/Body" element={<Body />} />
                            
                            <Route path="/Alerts" element={<TestSchedule />} />
                        </Routes>
                    </div>
                    
                    
                    
                </div>
            </div>
            
        </Router>
    );
};

export default App;
