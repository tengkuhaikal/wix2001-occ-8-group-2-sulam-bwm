import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// Import icons (assuming you are using react-icons like in your search example)
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "./Register.css";

const Register2 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // States for password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // States for inputs
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div className="register-container">
            <div className="form-section register-2">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="auth-header">
                        <h1 className="header-h1">{t('register_title_2')}</h1>
                        <p className="header-p">{t('signup2_subtitle')}</p>
                    </div>

                    {/* Password Field */}
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder={t('placeholder_pwd')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {password && (

                            <button
                                type="button"
                                className="eye-button"
                                onClick={togglePasswordVisibility}
                            >
                                {!showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </button>
                        )}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="password-wrapper">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={t('placeholder_confirm_pwd')}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        {confirmPassword && (
                            <button
                                type="button"
                                className="eye-button"
                                onClick={toggleConfirmVisibility}
                            >
                                {!showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </button>
                        )}
                    </div>

                    <button type="submit" className="primary-btn" onClick={() => navigate("/login")}>
                        {t('btn_complete')}
                    </button>
                    <button type="button" className="secondary-btn" onClick={() => navigate('/register')}>
                        {t('btn_back')}
                    </button>
                </form>
            </div>

            <div className="img-card">
                <img src="Resources/bwm-login-visual.png" alt="Heritage" className="login-image" />
            </div>
        </div>
    );
};

export default Register2;