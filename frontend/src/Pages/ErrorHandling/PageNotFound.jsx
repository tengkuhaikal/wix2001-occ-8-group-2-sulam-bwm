import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PageNotFound.css';
import SVGComponent from '../../svgviewer-react-output';

const PageNotFound = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const errorCode = location.state?.code || "404";
    const errorColor = t(`error.${errorCode}.color`, "#4c7c14");
    const bgColor = errorCode === "403" ? "#fff5f5" : errorCode === "500" ? "#f0f7ff" : "#f4f9ed";

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="not-found-image">
                    {/* Use the SVG component here */}
                    <SVGComponent className="not-found-svg" />
                </div>

                <div className="not-found-text">
                    <h1 className="error-code" style={{ color: errorColor }}>
                        {t(`error.${errorCode}.title`)}
                    </h1>

                    <h2 className="error-message">
                        {t(`error.${errorCode}.message`)}
                    </h2>

                    <div className="button-group">
                        <button
                            className="primary-btn btn-home"
                            style={{ backgroundColor: errorColor }}
                            onClick={() => navigate('/dashboard')}
                        >
                            {t('btn_back_to_dashboard')}
                        </button>
                        <button className="secondary-btn btn-back" onClick={() => navigate(-1)}>
                            {t('btn_back')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;