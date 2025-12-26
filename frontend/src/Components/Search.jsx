import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import './Search.css';

const Search = ({ onsubmit }) => {
    const { t } = useTranslation();
    const location = useLocation();

    const [search, setSearch] = useState('')

    const isVisible = location.pathname === '/dashboard' || location.pathname.startsWith('/heritage/') || location.pathname.endsWith('/payment');
    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page refresh
        console.log('Searching for: ', search)
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const eraseSearchInput = () => {
        setSearch('')
    };

    return (
        <form className="search-wrapper" onSubmit={handleSubmit}>
            <div className="input-section">
                <input
                    name="searchInput"
                    type="text"
                    className="search-input"
                    placeholder={t('search_placeholder')}
                    value={search}
                    onChange={handleInputChange}
                />
                {search && (
                    <button
                        type="button"
                        className="erase-button"
                        onClick={() => eraseSearchInput()}
                    >
                        <IoCloseOutline />
                    </button>
                )}
            </div>
            <button type="submit" className="search-button">
                <IoMdSearch />
            </button>
        </form>
    );
};

export default Search;