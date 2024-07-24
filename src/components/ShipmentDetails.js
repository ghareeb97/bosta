// src/components/ShipmentDetails.js
import React from 'react';
import './ShipmentDetails.css';
import ProgressBar from './ProgressBar';
import { useTranslation } from 'react-i18next';

function ShipmentDetails({ data }) {
    const { t } = useTranslation();
    const { trackingNumber, status, lastUpdate, promisedDate, provider, TransitEvents } = data;

    const reasonEvent = TransitEvents.find((event) => event.reason);
    const CancellationReason = reasonEvent ? reasonEvent.reason : '';

    return (
        <div className="shipment-details-card">
            <div className="shipment-details-grid">
                <div className="shipment-detail-item">
                    <p className="font-gray">{t('shipmentDetails.trackingNumber')} {trackingNumber}</p>
                    <p className="status-text">{t('shipmentDetails.status')}: {status}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">{t('shipmentDetails.lastUpdate')}</p>
                    <p className="font-semibold">{lastUpdate}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">{t('shipmentDetails.promisedDate')}</p>
                    <p className="font-semibold">{promisedDate}</p>
                </div>
                <div className="shipment-detail-item">
                    <p className="font-gray">{t('shipmentDetails.provider')}</p>
                    <p className="font-semibold">{provider}</p>
                </div>
            </div>
            <ProgressBar TransitEvents={TransitEvents} />
            {CancellationReason && (
                <div className="cancellation-reason">
                    <p className="font-red">{t('progressBar.cancellationReason')}: {CancellationReason}</p>
                </div>
            )}
        </div>
    );
}

export default ShipmentDetails;