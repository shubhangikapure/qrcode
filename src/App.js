import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import QRCodeMenu from './components/QRCodeMenu';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<QRCodeMenu />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
