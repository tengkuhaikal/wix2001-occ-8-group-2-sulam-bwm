import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IoCameraOutline, IoPencilSharp, IoSaveOutline, IoPersonOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";
import "./Profile.css";

const Profile = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    
    const [userData, setUserData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@badanwarisan.org.my",
        phone: "+60 12-345 6789",
    });
    
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.firstName}${userData.lastName}`;
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="profile-page-container">
            <div className="profile-card">
                {/* Brand Header Section */}
                <div className="profile-header">
                    <div className="avatar-wrapper">
                        <img
                            src={avatarUrl}
                            alt="Profile"
                            className="profile-img"
                        />
                        <button className="avatar-edit-btn">
                            <IoCameraOutline />
                        </button>
                    </div>
                    <h2 className="user-full-name">{`${userData.firstName} ${userData.lastName}`}</h2>
                    <span className="user-badge">{t('member_label')}</span>
                </div>

                {/* Information Section */}
                <div className="profile-body">
                    <div className="section-title-row">
                        <h3>{t('personal_details')}</h3>
                        <button
                            className="action-toggle-btn"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? <><IoSaveOutline /> {t('save')}</> : <><IoPencilSharp /> {t('edit')}</>}
                        </button>
                    </div>

                    <div className="info-grid">
                        <div className="input-field">
                            <label><IoPersonOutline /> {t('placeholder_first_name')}</label>
                            <input
                                type="text"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="input-field">
                            <label><IoPersonOutline /> {t('placeholder_last_name')}</label>
                            <input
                                type="text"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="input-field">
                            <label><IoMailOutline /> {t('placeholder_email')}</label>
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="input-field">
                            <label><IoCallOutline /> {t('placeholder_phone')}</label>
                            <input
                                type="text"
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                        </div>
                    </div>

                    
                    <button className="danger-btn" onClick={() => navigate('/login')}>{t('logout')}</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;