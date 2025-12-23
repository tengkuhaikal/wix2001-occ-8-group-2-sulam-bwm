import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
// Ensure FaChevronDown is imported here
import { FaCreditCard, FaUniversity, FaWallet, FaChevronDown } from 'react-icons/fa';
import './Payment.css';
import { useTranslation } from 'react-i18next';

const Payment = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const [selectedMethod, setSelectedMethod] = useState(null);
    const [selectedProvider, setSelectedProvider] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const finalPrice = location.state?.totalAmount || 0;

    const paymentConfig = {
        fpx: {
            label: t('fpx'),
            icon: <FaUniversity />,
            options: ['Maybank2u', 'CIMB', 'Public Bank', 'RHB', 'Hong Leong', 'UOB', 'Bank Islam', 'BSN']
        },
        card: {
            label: t('card'),
            icon: <FaCreditCard />,
            options: ['Visa', 'Mastercard', 'Amex']
        },
        ewallet: {
            label: t('ewallet'),
            icon: <FaWallet />,
            options: ["Touch 'n Go", 'GrabPay', 'Boost']
        }
    };

    const handleMainMethodClick = (methodKey) => {
        setSelectedMethod(methodKey);
        setSelectedProvider('');
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleContinuePayment = () => {

        const currentPath = location.pathname; // e.g., "/payment"

        if (selectedMethod === 'card') {
            // Navigate to the sub-route (e.g., "/payment/card-details")
            navigate(`${currentPath}/card-details`, {
                state: {
                    amount: finalPrice,
                    provider: selectedProvider,
                    from: currentPath // This stores the current route info
                }
            });
        } else {
            navigate(`${currentPath}/processing-payment`, {
                state: {
                    amount: finalPrice,
                    method: selectedProvider,
                    from: currentPath
                }
            });
        }
    };

    return (
        <div className="payment-page">
            <main className="payment-container">
                <div className="amount-summary">
                    <span>{t('total_payment')}: </span>
                    <span className="final-price">RM {Number(finalPrice).toFixed(2)}</span>
                </div>
                <h4 className="payment-title">{t('select_payment_method')}</h4>

                <div className="payment-list">
                    {Object.keys(paymentConfig).map((key) => (
                        <React.Fragment key={key}>
                            <div
                                className={`payment-option ${selectedMethod === key ? 'active' : ''}`}
                                onClick={() => handleMainMethodClick(key)}
                            >
                                <div className="method-main-content">
                                    <div className="method-icon">{paymentConfig[key].icon}</div>
                                    <div className="method-info">
                                        <h3>{paymentConfig[key].label}</h3>
                                    </div>
                                </div>

                                {/* Visual indicator (radio or arrow) */}
                                <div className={`selection-arrow ${selectedMethod === key ? 'open' : ''}`}>
                                    <FaChevronDown />
                                </div>
                            </div>

                            {/* NESTED DROPDOWN: Shows only under the active method */}
                            {selectedMethod === key && (
                                <div className={`inline-provider-container`}>
                                    <div className={`choice-selected ${selectedProvider === '' ? 'close' : 'open'}`}>{`${selectedProvider}`}</div>
                                    <div className={`custom-dropdown ${isDropdownOpen ? 'open' : 'close'}`}>
                                        {isDropdownOpen && (
                                            <ul className="dropdown-menu-inline">
                                                {paymentConfig[key].options.map((opt) => (
                                                    <li key={opt} onClick={() => {
                                                        setSelectedProvider(opt);
                                                        setIsDropdownOpen(false);
                                                    }}>
                                                        {opt}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <button
                    className="primary-btn pay-now-btn"
                    /* FIX: Button only active if a provider is chosen */
                    disabled={!selectedProvider}
                    onClick={handleContinuePayment}
                >
                    {selectedMethod === 'card' ? t('btn_next') : t('pay_now')}
                </button>
            </main>
        </div>
    );
};

export default Payment;