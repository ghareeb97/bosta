import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentState, cancellationReason }) => {
    const steps = [
        { label: 'Ticket Created', state: 'TICKET_CREATED', icon: '📝' },
        { label: 'Received from Vendor', state: 'RECEIVED_FROM_VENDOR', icon: '📦' },
        { label: 'Out for Delivery', state: 'OUT_FOR_DELIVERY', icon: '🚚' },
        { label: 'Delivered', state: 'DELIVERED', icon: '✅' },
    ];

    // Map API states to generalized steps
    const stateToStep = {
        'TICKET_CREATED': 'Ticket Created',
        'PACKAGE_RECEIVED': 'Received from Vendor',
        'IN_TRANSIT': 'Received from Vendor',
        'NOT_YET_SHIPPED': 'Received from Vendor',
        'OUT_FOR_DELIVERY': 'Out for Delivery',
        'DELIVERED': 'Delivered',
        'DELIVERED_TO_SENDER': 'Delivered',
        'WAITING_FOR_CUSTOMER_ACTION': 'Received from Vendor',
        'CANCELLED': 'Out for Delivery',
        'DELIVERY_FAILED': 'Received from Vendor'
    };

    // Determine if the progress bar should be red (canceled)
    const hasCancellationReason = Boolean(cancellationReason);

    // Determine the current step index
    const currentStepLabel = stateToStep[currentState] || 'Ticket Created';
    const currentStepIndex = steps.findIndex(step => step.label === currentStepLabel);

    return (
        <div className={`progress-bar ${hasCancellationReason ? 'red' : ''}`}>
            {steps.map((step, index) => (
                <div
                    key={step.state}
                    className={`progress-step ${index < currentStepIndex ? 'completed' : ''} ${index === currentStepIndex ? 'current' : ''} ${hasCancellationReason && index >= steps.findIndex(step => step.label === 'Out for Delivery') ? 'canceled' : ''}`}
                >
                    <div className="progress-icon">
                        {step.icon}
                    </div>
                    <div className="progress-label">{step.label}</div>
                </div>
            ))}
            {hasCancellationReason && (
                <div className="cancellation-reason">
                    <p>{cancellationReason}</p>
                </div>
            )}
        </div>
    );
};

export default ProgressBar;
