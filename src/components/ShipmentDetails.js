import React from 'react';
import './ShipmentDetails.css';

function ShipmentDetails({ data }) {
    return (
        <div className="shipment-details-card">
            <div className="shipment-details-grid">
                <div className="shipment-detail-item">
                    <p className="font-gray">رقم الشحنة {data.trackingNumber}</p>
                    <p className="status-text">{data.status}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">آخر تحديث</p>
                    <p className="font-semibold">{data.lastUpdate}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">اسم التاجر</p>
                    <p className="font-semibold">{data.provider}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">موعد التسليم خلال</p>
                    <p className="font-semibold">{data.promisedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default ShipmentDetails;
