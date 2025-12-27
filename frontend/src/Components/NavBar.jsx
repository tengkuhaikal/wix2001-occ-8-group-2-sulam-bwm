// src/Components/Navbar.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { IoLanguageOutline, IoPersonCircleOutline } from "react-icons/io5"; // Added person icon as fallback
import "./NavBar.css";
import Search from "./Search";

const Navbar = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Mock authentication state 
    // Set this to an object like { name: "John", avatar: null } to test the logged-in view
    const [userData, setUserData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@badanwarisan.org.my",
        phone: "+60 12-345 6789",
    });

    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.firstName}${userData.lastName}`;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const languageNames = {
        en: 'English',
        ms: 'Bahasa Melayu',
        zh: '中文',
        ta: 'தமிழ்'
    };

    const invisible = location.pathname === '*'
    if (invisible) return null

    const handleSearchChange = (query) => {
        console.log("Search query:", query);
    };

    return (
        <nav className="global-navbar">
            <div className="nav-left">
                <div className="nav-logo" onClick={() => navigate("/")}>
                    <img src="/bwm-logo.png" alt="BWM Logo" />
                    <span className="logo-text">Badan Warisan Malaysia</span>
                </div>
            </div>

            <div className="nav-center">
                <Search className='search-bar' onsubmit={handleSearchChange} />
            </div>

            <div className="nav-right">
                <div className="language-dropdown">
                    <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <IoLanguageOutline />
                        <span className="lang-label">
                            {languageNames[i18n.language] || i18n.language.toUpperCase()}
                        </span>
                        <span className="arrow">▾</span>
                    </button>

                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li onClick={() => changeLanguage('ms')}>Bahasa Melayu</li>
                            <li onClick={() => changeLanguage('en')}>English</li>
                            <li onClick={() => changeLanguage('zh')}>中文</li>
                            <li onClick={() => changeLanguage('ta')}>தமிழ்</li>
                        </ul>
                    )}
                </div>

                {/* Profile only shown if logged in */}
                {userData && (
                    <div className="user-profile" onClick={() => navigate("/profile")}>
                        <div className="profile-avatar-wrapper">
                            <img src={avatarUrl} alt="Profile" className="profile-icon" />
                        </div>
                        <span className="profile-name">{userData.lastName}</span>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;