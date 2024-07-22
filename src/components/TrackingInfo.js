import React from 'react';
import './TrackingInfo.css';

const TrackingInfo = ({ shipmentData }) => {
    const { CurrentStatus, TrackingNumber, TransitEvents, PromisedDate } = shipmentData;

    const statusColor = CurrentStatus.state === 'DELIVERED' ? 'status-delivered' : 'status-other';

    return (
        <div className="tracking-info">
            <div className="Tracking-Timeline">
                <h2 className="card-title">تفاصيل الشحنة</h2>
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
                                {TransitEvents.map((event, index) => (
                                    <tr key={index}>
                                        <td>{event.hub || 'N/A'}</td>
                                        <td>{new Date(event.timestamp).toLocaleDateString()}</td>
                                        <td>{new Date(event.timestamp).toLocaleTimeString()}</td>
                                        <td className={event.state === 'DELIVERED' ? statusColor : ''}>
                                            {event.state}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="dual-card">
                <h2 className="card-title">عنوان التسليم</h2>
                <div className="info-address-card">
                    <p className="address">العنوان غير متوفر في البيانات</p>
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