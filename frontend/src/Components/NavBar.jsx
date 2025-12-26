// src/Components/Navbar.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { IoLanguageOutline } from "react-icons/io5";
import "./NavBar.css";

import Search from "./Search";

const Navbar = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

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

    const location = useLocation()

    const invisible = location.pathname === '/*'

    if (invisible) return null


    const handleSearchChange = (query) => {
        // Implement search logic or navigation here
        console.log("Search query:", query);
    };

    // 1. Mock authentication state (Replace this with your actual Auth logic/context)
    const [user, setUser] = useState(null);

    return (
        <nav className="global-navbar">
            <div className="nav-logo" onClick={() => navigate("/")}>
                <img src="/bwm-logo.png" alt="BWM Logo" />
                <span className="logo-text">Badan Warisan Malaysia</span>
            </div>

            <Search className='search-bar' onsubmit={handleSearchChange} />

            <div className="language-dropdown">
                <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <IoLanguageOutline />
                    <span className="lang-label">
                        {languageNames[i18n.language] || i18n.language.toUpperCase()}
                    </span>
                    ▾
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

            {user && (
                <div className="user-profile" onClick={() => navigate("/profile")}>
                    <img
                        src={user.avatar || "/default-avatar.png"}
                        alt="Profile"
                        className="profile-icon"
                    />
                    <span className="profile-name">{user.name}</span>
                </div>
            )}
        </nav>
    );
};

export default Navbar;