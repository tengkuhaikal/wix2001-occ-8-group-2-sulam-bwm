import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Search.css';

const Search = ({ onsubmit }) => {
    const { t } = useTranslation();
    const location = useLocation();

    const isVisible = location.pathname === '/dashboard' || location.pathname.startsWith('/heritage/') || location.pathname.endsWith('/payment');
    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page refresh
        const formData = new FormData(e.target);
        const query = formData.get("searchInput"); // Get value from input name="searchInput"

        if (onsubmit) {
            onsubmit(query); // Send to Navbar
        }
    };

    return (
        <form className="search-wrapper" onSubmit={handleSubmit}>
            <input
                name="searchInput"
                type="text"
                className="search-input"
                placeholder={t('search_placeholder')}
            />
            <button type="submit" className="search-button">🔍</button>
        </form>
    );
};

export default Search;