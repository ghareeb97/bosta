import './App.css';
import Navbar from './components/Navbar';
import ShipmentDetails from './components/ShipmentDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
        <ShipmentDetails data={{
          trackingNumber: '123456789',
          status: 'في الطريق',
          lastUpdate: '١٢ يناير ٢٠٢١',
          promisedDate: '١٨ يناير ٢٠٢١',
          provider: 'متجر الكتروني'
        }} />
    </div>
  );
}

export default App;
