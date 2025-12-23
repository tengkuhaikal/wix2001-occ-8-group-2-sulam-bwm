import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="main-footer">
            <div className="footer-content">
                {/* Column 1: Logo & Tagline */}
                <div className="footer-section logo-section">
                    <img src="/bwm-logo.png" alt="BWM Logo" className="footer-logo" />
                    <p className="footer-tagline">{t('banner_sub')}</p>
                </div>

                {/* Column 2: About */}
                <div className="footer-section">
                    <h4>{t('footer_about')}</h4>
                    <ul>
                        <li><Link to="/about">{t('footer_mission')}</Link></li>
                        <li><Link to="/history">{t('footer_history')}</Link></li>
                    </ul>
                </div>

                {/* Column 3: Connect */}
                <div className="footer-section">
                    <h4>{t('footer_connect')}</h4>
                    <ul>
                        <li><Link to="/contact">{t('footer_contact')}</Link></li>
                        <li><Link to="/register">{t('footer_membership')}</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{t('footer_rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;