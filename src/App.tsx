import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
// App components
import LoginPage from './components/loginPage/LoginPage'
import TrackingPage from './components/trackingPage/TrackingPage'
import DetailsPage from './components/detailsPage/DetailsPage'
import StatsPage from './components/statsPage/StatsPage'

const App: React.FC = function() {

return (
<div className="App">
    <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/track" element={<TrackingPage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
</div>
);
}

export default App;