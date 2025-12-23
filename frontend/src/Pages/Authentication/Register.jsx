import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // States for inputs
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");

    return (
        <div className="register-container">
            {/* Left Side: Form */}
            <div className="form-section">
                <form>
                    <div className="auth-header">
                        <h1 className="header-h1">{t('join_header')}</h1>
                        <p className="header-p">{t('join_desc')}</p>
                    </div>

                    <input
                        type="email"
                        placeholder={t('placeholder_email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={t('placeholder_first_name')}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={t('placeholder_last_name')}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder={t('placeholder_phone')}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />

                    <button type="submit" className="primary-btn" onClick={() => navigate("/register-2")}>
                        {t('btn_next')}
                    </button>

                    <p className="footer-text">
                        {t('already_have_account')}{" "}
                        <a onClick={() => navigate("/login")}>
                            {t('btn_go_to_login')}
                        </a>
                    </p>
                </form>
            </div>

            {/* Right Side: Image */}
            <div className="img-card">
                <img src="Resources/bwm-login-visual.png" alt="Heritage" className="login-image" />
            </div>
        </div>
    );
};

export default Register;