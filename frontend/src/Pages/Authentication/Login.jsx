import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Login = () => {
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
            <div className="form-section register-2">
                <form>
                    <div className="auth-header">
                        <h1 className="header-h1">{t('login_title')}</h1>
                        <p className="header-p">{t('login_subtitle')}</p>
                    </div>

                    <input
                        type="email"
                        placeholder={t('placeholder_email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder={t('placeholder_pwd')}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />


                    <button type="submit" className="primary-btn" onClick={() => navigate("/dashboard")}>
                        {t('btn_login')}
                    </button>
                </form>
            </div>

            {/* Right Side: Image */}
            <div className="img-card">
                <img src="Resources/bwm-login-visual.png" alt="Heritage" className="login-image" />
            </div>
        </div>
    );
};

export default Login;