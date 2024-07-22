import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShipmentDetails from './components/ShipmentDetails';
import TrackingInfo from './components/TrackingInfo';
import axios from 'axios';

function App() {
  const [shipmentData, setShipmentData] = useState(null);

  useEffect(() => {
    axios.get('https://tracking.bosta.co/shipments/track/84043113')
      .then(response => {
        setShipmentData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the shipment data!", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
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
