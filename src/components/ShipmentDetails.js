import React from 'react';
import './ShipmentDetails.css';

function ShipmentDetails({ data }) {
    const { trackingNumber, status, lastUpdate, promisedDate, provider, TransitEvents } = data;

    return (
        <div className="shipment-details-card">
            <div className="shipment-details-grid">
                <div className="shipment-detail-item">
                    <p className="font-gray">رقم الشحنة {trackingNumber}</p>
                    <p className="status-text">{status}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">آخر تحديث</p>
                    <p className="font-semibold">{lastUpdate}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">اسم التاجر</p>
                    <p className="font-semibold">{provider}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">موعد التسليم خلال</p>
                    <p className="font-semibold">{promisedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default ShipmentDetails;
