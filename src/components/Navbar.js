import React, { useState } from 'react';
import './Navbar.css';
import { Search } from 'lucide-react';

const Navbar = ({ onTrack }) => {
    const [isTrackingVisible, setIsTrackingVisible] = useState(false);
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleTrackClick = () => {
        setIsTrackingVisible(!isTrackingVisible);
    };

    const handleInputChange = (e) => {
        setTrackingNumber(e.target.value);
    };

    const handleSearchClick = () => {
        onTrack(trackingNumber);
        setTrackingNumber('');
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo-section">
                    <a href="/">
                        <img src="Bosta_ar_logo.svg" alt="Your Logo" />
                    </a>
                </div>
                <div className="navbar-mid-section">
                    <ul>
                        <li>الرئيسية</li>
                        <li>الأسعار</li>
                        <li>كلم المبيعات</li>
                    </ul>
                </div>
                <div className="navbar-action-section">
                    <ul>
                        <li onClick={handleTrackClick} style={{ cursor: 'pointer' }}>تتبع شحنتك</li>
                        <li>تسجيل الدخول</li>
                        <li style={{ color: '#E30613' }}>ENG</li>
                    </ul>
                </div>
            </nav>
            {isTrackingVisible && (
                <div className="tracking-group">
                    <div className="tracking-form">
                        <input
                            type="text"
                            value={trackingNumber}
                            onChange={handleInputChange}
                            placeholder="ادخل رقم التتبع"
                        />
                        <button onClick={handleSearchClick} aria-label="Search">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;