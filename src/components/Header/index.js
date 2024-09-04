// export default Header;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faBars, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
// import {  faCog, faBars } from '@fortawesome/free-solid-svg-icons';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Select, MenuItem } from '@mui/material';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './index.css'; // Ensure CSS is correctly imported


const Header = ({ onMenuClick, userName }) => {
    // State for managing dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle dropdown
    const toggle = () => setDropdownOpen(prevState => !prevState);

    // Placeholder for user image
    const user = 'https://via.placeholder.com/30'; // Replace with actual user image URL
    return (
        <div className="container-fluid bg-light header" style={{ border: '1px solid gray' }}>
            <div className="d-flex align-items-center w-100">
                {/* Left section for menu button and search bar */}
                <div className="d-flex align-items-center">
                    <button className="menu-button" onClick={onMenuClick}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                </div>

                {/* Center section for logo */}
                <div className="mx-auto absolute" >
                <Link to="/Body" className="">
                <img
                        src="https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689_1280.png"
                        alt="Logo"
                        className="img-fluid logo"
                        
                    />
            </Link>
            </div>
                    {/* <img
                        src="https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689_1280.png"
                        alt="Logo"
                        className="img-fluid logo"
                        
                    /> */}
                {/* </div> */}
                {/* <div className="input-group rounded-pill ms-2">
                        <input type="text" className="form-control rounded-pill" placeholder="Search" />
                        <span className="input-group-text border-0 bg-transparent rounded-pill"></span>
                    </div> */}

                {/* Right section for search, language, notifications, messages, profile, and theme change */}
                <div className="d-flex align-items-center gap-3">

                    {/* Search Bar */}
                    <div className="input-group rounded-pill search-bar  ">
                        <span className="input-group-text border-0 bg-transparent">

                        </span>

                        <input type="text" className="form-control rounded-pill" placeholder="Search" />

                    </div>

                    {/* Center section for logo */}
                    <div className="mx-auto1 position-relative ">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/12/17/15/50/logo-1913689_1280.png"
                            alt="Logo"
                            className="img-fluid logo"
                        />
                    </div>

                    {/* Language Selector */}
                    <Select
                        className="language-selector "
                        defaultValue="EN"
                        variant="outlined"
                        size="small"
                        style={{
                            borderRadius: '25px', // Set border radius here
                            overflow: 'hidden', // Ensure the content doesn't overflow the border

                        }}
                    >
                        <MenuItem value="EN">EN</MenuItem>
                        <MenuItem value="HI">HI</MenuItem>
                        <MenuItem value="ES">ES</MenuItem>
                    </Select>

                    {/* Notification Icon */}
                    <div className="bell-icon d-flex align-items-center">
                        <FontAwesomeIcon icon={faBell} />
                    </div>


                    {/* Messages Icon */}
                    <div className="message-icon d-flex align-items-center" style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    {/* Profile Section */}
                    {/* <div className="d-flex align-items-center " style={{ cursor: 'pointer' }}>
                        <AccountCircleRoundedIcon fontSize="medium" />
                        {userName && <span className="ms-2">{userName}</span>}
                    </div> */}
                    {/* Profile Section */}
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color="transparent">
                            <img
                                src={user}
                                alt="profile"
                                className="rounded-circle"
                                width="25"
                            />
                        </DropdownToggle>
                        <DropdownMenu className="mt-3" right>
                            <DropdownItem header>Info</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>My Account</DropdownItem>
                            <DropdownItem>Edit Profile</DropdownItem>
                            
                            <DropdownItem>My Balance</DropdownItem>
                            <DropdownItem>Inbox</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/* Theme Change Icon */}
                    <div className="theme-change-icon">
                        <FontAwesomeIcon icon={faCog} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;