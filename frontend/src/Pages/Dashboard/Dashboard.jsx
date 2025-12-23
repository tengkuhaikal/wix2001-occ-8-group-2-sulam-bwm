import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import heritageItems from '../../assets/dummy_data.js';
import TimeStamps from '../../assets/TimeStamps.jsx';
import './Dashboard.css';

// Sub-component to handle the image fallback logic
// Reusable component for both Dashboard and Main Viewer
const SmartImage = ({ src, title, className }) => {
    const [imgError, setImgError] = useState(false);

    // DiceBear Initials URL as fallback
    const fallbackUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(title)}`;

    return (
        <img
            src={imgError ? fallbackUrl : src}
            alt={title}
            className={className}
            onError={() => setImgError(true)}
            loading="lazy"
        />
    );
};

const Dashboard = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const categories = ["all", "architecture", "restoration", "history", "culture", "archaeology"];
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? heritageItems
        : heritageItems.filter(item => item.category === activeCategory);

    return (
        <div className="dashboard-container">
            <div className="category-bar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {t(`categories.${cat}`)}
                    </button>
                ))}
            </div>

            <div className="video-grid">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="video-card"
                        style={{ "--card-color": item.themeColor }}
                        onClick={() => navigate(`/heritage/${item.id}`)}
                    >
                        <div className="thumbnail-container">
                            {/* Logic handled by ThumbnailImage component */}
                            <SmartImage
                                src={item.thumbnail}
                                title={t(item.title)}
                                className="thumbnail"
                            />

                            <span className={`media-label ${item.type}`}>
                                {t(`media_labels.${item.type}`)}
                            </span>
                        </div>

                        <div className="video-details">
                            <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(item.channel)}`}
                                alt="avatar"
                                className="channel-avatar"
                            />
                            <div className="video-text">
                                <h3 className="h3-video-title">
                                    {t(item.title)}
                                </h3>
                                <p className="channel-name">{item.channel}</p>
                                <p className="video-stats">{item.views} {t('stats_label.views')} • <TimeStamps date={item.createdAt}/></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;