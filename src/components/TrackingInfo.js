import React from 'react';
import './TrackingInfo.css';

const TrackingInfo = ({ shipmentData }) => {
    // Dummy data - replace with actual data from API
    const shipmentDetails = {
        trackingNumber: '6741696',
        status: 'تم التسليم',
        lastUpdate: 'الأثنين 06/04/2020 at 5:33 pm',
        merchantName: 'SOUQ.COM',
        deliveryDate: '3 يناير 2020',
        address: 'امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 33 ،القاهرة'
    };

    const statusColor = shipmentDetails.status === 'تم التسليم' ? 'status-delivered' : 'status-other';

    return (
        <div className="tracking-info">
            <div className="Tracking-Timeline">
            <h2 className="card-title"> تفاصيل الشحنة</h2>
            <div className="info-card">
                <div className="table-container">
                    <table className="tracking-table">
                        <thead>
                            <tr>
                                <th>الفرع</th>
                                <th>التاريخ</th>
                                <th>الوقت</th>
                                <th>تفاصيل</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>مدينة نصر</td>
                                <td>05/04/2020</td>
                                <td>12:30 pm</td>
                                <td>تم إنشاء الشحنة</td>
                            </tr>
                            <tr>
                                <td>مدينة نصر</td>
                                <td>05/04/2020</td>
                                <td>12:30 pm</td>
                                <td>تم استلام الشحنة من التاجر</td>
                            </tr>
                            <tr>
                                <td>مدينة نصر</td>
                                <td>05/04/2020</td>
                                <td>12:30 pm</td>
                                <td>الشحنة خرجت للتسليم</td>
                            </tr>
                            <tr>
                                <td>مدينة نصر</td>
                                <td>05/04/2020</td>
                                <td>12:30 pm</td>
                                <td className={statusColor}>{shipmentDetails.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            <div className="dual-card">
                <h2 className="card-title">عنوان التسليم</h2>
            <div className="info-card">
                <p className="address">{shipmentDetails.address}</p>
            </div>
            <div className="info-card">
                <div className="help-section">
                    <img src="Questions-illustration.png" alt="Questions-illustration" width={150} />
                    <div className="help-text">
                        <p>هل يوجد مشكلة في شحنتك؟!</p>
                        <button className="report-button">
                            إبلاغ عن مشكلة
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TrackingInfo;