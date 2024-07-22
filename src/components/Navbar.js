import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
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
                    <li>تتبع شحنتك</li>
                    <li>تسجيل الدخول</li>
                    <li style={{ color: '#E30613' }}>ENG</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;