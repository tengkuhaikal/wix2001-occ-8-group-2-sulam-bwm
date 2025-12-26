import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import TimeStamps from '../../assets/TimeStamps.jsx';
import heritageItems from '../../assets/dummy_data';
import './HeritageDetails.css';

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

const HeritageDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [visible, setVisible] = useState(3);


    const item = heritageItems.find((h) => h.id === id);
    // Filter out the current item for the sidebar
    const recommendations = heritageItems.filter((h) => h.id !== id);

    if (!item) return <div className="error-msg">Item not found!</div>;

    return (
        <div className="youtube-layout-container">
            {/* Left Side: Main Content */}

            <main className="main-content">
                {/* <button className="subscribe-btn" onClick={() => navigate('/dashboard')}>Back</button> */}
                <div className="viewer-container">
                    {/* 1. PDF DOCUMENT */}
                    {item.type === 'document' && (
                        <iframe
                            src={`${item.fileSource}`}
                            title={item.title}
                            className="main-viewer"
                        />
                    )}

                    {/* 2. VIDEO PLAYER */}
                    {item.type === 'video' && (
                        <video
                            key={item.fileSource}
                            autoPlay
                            controls
                            controlsList='nodownload'
                            className="main-viewer"
                        // poster={item.thumbnail} // Shows thumbnail until play is clicked
                        >
                            <source src={item.fileSource} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {/* 3. STATIC IMAGE */}
                    {item.type === 'image' && (
                        <img src={item.thumbnail} alt={item.title} className="main-viewer" />
                    )}
                </div>

                <div className="info-section">
                    <div className="title-section">
                        <h1 className="video-title">{t(item.title)}</h1>
                        <span
                            style={{ "--card-color": item.themeColor }}
                            className={`details-media-label ${item.type}`}>
                            {t(`media_labels.${item.type}`)}
                        </span>
                    </div>

                    <div className="channel-bar">
                        <div className="author-info">
                            <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.channel}`}
                                alt="avatar"
                                className="author-avatar"
                            />
                            <span className="author-name">{item.channel}</span>
                        </div>
                        <button className="primary-btn buy-content-btn" onClick={() => navigate(`/heritage/${id}/buy-content`)}>{t('unlock_content')}</button>
                    </div>
                    <div className="description-box">
                        <p className="stats">{item.views} {t('stats_label.views')} • <TimeStamps date={item.createdAt} /></p>
                        <p className="desc-text">{t(`heritage.${item.id}.description`)}</p>
                    </div>
                </div>
            </main>

            {/* Right Side: Sidebar Recommendations */}
            <aside className="recommendations-sidebar">
                {recommendations.slice(0, visible).map((rec) => (
                    <div
                        key={rec.id}
                        className="rec-card"
                        onClick={() => navigate(`/heritage/${rec.id}`)}
                    >
                        <div className="rec-thumbnail">
                            {/* <img src={rec.thumbnail} alt={rec.title} /> */}
                            <SmartImage
                                src={rec.thumbnail}
                                title={t(rec.title)}
                                className="thumbnail"
                            />
                            <span style={{ "--card-color": rec.themeColor }}
                                className={`media-label ${rec.type}`} >{t(`media_labels.${rec.type}`)}</span>
                        </div>
                        <div className="rec-info">
                            <h4 className="rec-title">{t(rec.title)}</h4>
                            <p className="rec-meta">{rec.channel}</p>
                            <p className="rec-meta">{rec.views} {t('stats_label.views')} • <TimeStamps date={rec.createdAt} /></p>
                        </div>
                    </div>
                ))}

                {
                    recommendations.length > visible && (
                        <div className="more-button">
                            <button
                                className="view-more-btn"
                                onClick={() => setVisible(visible + 3)}
                            >
                                {t('load_more')}
                            </button>
                        </div>
                    )
                }
            </aside>
        </div>
    );
};

export default HeritageDetails;