import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "./Landing.css";

const Landing = () => {

    // initialize translation
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // Function to change language and close dropdown
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const navigate = useNavigate();

    return (
    
        <div className="home-container">

            {/* banner */}
            <div className="banner">
                <img src="Resources/bwm-banner.png" alt="Badan Warisan Malaysia" className="banner-image" />
                <div className="image-gradient-home"></div>
                <div className="image-overlay">
                    <h1>
                        {/* Use Trans instead of {t('banner_title')} to render the <br /> */}
                        <Trans i18nKey="banner_title">
                            Welcome to BWM, <br /> Badan Warisan Malaysia
                        </Trans>
                    </h1>
                    <p>
                        {t('banner_sub')}
                    </p>
                    <button className="primary-btn"
                        onClick={() => navigate("/register")}>{t('get_start_btn')}</button>
                    <button className="secondary-btn" onClick={() => navigate("/warisan")}>{t('explore_btn')}</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;

