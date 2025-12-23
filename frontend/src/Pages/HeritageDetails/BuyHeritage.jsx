import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BuyHeritage.css';
import heritageItems from '../../assets/dummy_data';
import { useTranslation } from 'react-i18next';

const BuyHeritage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();

    
    // Safety: ensure id comparison works (string vs number)
    const item = heritageItems.find((h) => String(h.id) === String(id));
    
    // Handle loading/error state if item doesn't exist
    if (!item) return <div className="cart-page">Item not found</div>;
    
    // Create a dummy array of 20 items for testing scroll behavior
    const testItems = Array.from({ length: 10 }, (_, index) => ({
        ...item,
        uniqueKey: `${item.id}-${index}` // unique key for the loop
    }));
    
    const totalPrice = testItems.reduce((acc, curr) => acc + Number(curr.price), 0);
    
    const handleCheckout = () => {
        navigate(`/heritage/${id}/buy-content/payment`, {
            state: {
                totalAmount: totalPrice // This is the dynamic price we calculated
            }
        });
    };

    return (
        <div className="cart-page">
            <main className="cart-container">
                <h2 className="cart-title">{t('shopping_cart')}</h2>

                {/* Looping 20 items */}
                {testItems.map((testItem) => (
                    <div className="cart-item-card" key={testItem.uniqueKey}>
                        <div className="thumbnail-container-buy">
                            <img className='thumbnail-buy' src={testItem.thumbnail} alt={t(testItem.title)} />
                        </div>

                        <div className="item-details">
                            <h3>{t(testItem.title)}</h3>
                            <p className="category-text">{t(`categories.${testItem.category}`)}</p>
                            <p className="desc-text">{t(`heritage.${testItem.id}.description`)}</p>
                        </div>

                        <div className="item-price">
                            <p className="price">RM{testItem.price}</p>
                        </div>
                    </div>
                ))}
            </main>

            {/* The Checkout Bar */}
            <div className="checkout">
                <div className="total-section">
                    <p>{t('total')}</p>
                    <h3>RM {totalPrice.toFixed(2)}</h3>
                </div>
                <button className="primary-btn checkout-btn" onClick={handleCheckout}>
                    {t('checkout')}
                </button>
            </div>
        </div>
    );
};

export default BuyHeritage;