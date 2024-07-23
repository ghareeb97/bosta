import React, { useState } from 'react';
import { Dropdown, Input, Button, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = ({ onTrack }) => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearchIconClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleInputChange = (e) => {
        setTrackingNumber(e.target.value);
    };

    const handleSearchClick = () => {
        onTrack(trackingNumber);
        setTrackingNumber('');
    };

    const searchMenu = (
        <Menu>
            <Menu.Item key="1">
                    <h5 className="navbar-input-title">Track your shipment</h5>
                    <div className="ant-input-group-wrapper ant-input-search ant-input-search-with-button">
                        <div className="ant-input-wrapper ant-input-group">
                            <Input
                                placeholder="Tracking No."
                                className="ant-input"
                                value={trackingNumber}
                                onChange={handleInputChange}
                                style={{ borderRadius: '5px 0 0 5px', height: '40px' }}
                            />
                            <Button
                                type="primary"
                                className="ant-input-search-button"
                                onClick={handleSearchClick}
                                icon={<SearchOutlined />}
                                style={{ borderRadius: '0 5px 5px 0' }}
                            />
                        </div>
                    </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <nav className="navbar">
            <div className="navbar-logo-section">
                <a href="/">
                    <img src="Bosta_ar_logo.svg" alt="Your Logo" />
                </a>
            </div>
            <div className="navbar-mid-section">
                <ul>
                    <li className="navbar-link">الرئيسية</li>
                    <li className="navbar-link">الأسعار</li>
                    <li className="navbar-link">كلم المبيعات</li>
                </ul>
            </div>
            <div className="navbar-action-section">
                <ul>
                    <li className="navbar-link">
                        <Dropdown
                            overlay={searchMenu}
                            trigger={['click']}
                            visible={searchVisible}
                            onVisibleChange={handleSearchIconClick}
                        >
                            <a className="ant-dropdown-trigger" onClick={e => e.preventDefault()}>
                                تتبع شحنتك <SearchOutlined />
                            </a>
                        </Dropdown>
                    </li>
                    <li className="navbar-link">تسجيل الدخول</li>
                    <li className="navbar-link" style={{ color: '#E30613' }}>ENG</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
