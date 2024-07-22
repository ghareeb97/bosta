import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShipmentDetails from './components/ShipmentDetails';
import TrackingInfo from './components/TrackingInfo';
import axios from 'axios';

function App() {
  const [shipmentData, setShipmentData] = useState(null);

  const fetchShipmentData = (trackingNumber) => {
    axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then(response => {
        setShipmentData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the shipment data!", error);
      });
  }

  return (
    <div className="App">
      <Navbar onTrack={fetchShipmentData} />
      {shipmentData ? (
        <>
          <ShipmentDetails data={{
            trackingNumber: shipmentData.TrackingNumber,
            status: shipmentData.CurrentStatus.state,
            lastUpdate: new Date(shipmentData.CurrentStatus.timestamp).toLocaleString(),
            promisedDate: new Date(shipmentData.PromisedDate).toLocaleDateString(),
            provider: shipmentData.provider,
            TransitEvents: shipmentData.TransitEvents
          }} />
          <TrackingInfo shipmentData={shipmentData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
