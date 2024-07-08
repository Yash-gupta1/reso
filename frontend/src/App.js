import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ImpactChart from './components/ImpactChart';
import RecordsList from './components/RecordsList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    alert('Login successful!');
  };

  const data = [
    { id: 1, quantity: 100, amount: 100, postingYear: 2020, postingMonth: 'January', actionType: 'Type1', actionNumber: '001', actionName: 'Action1', status: 'Pending', Impact: "High" },
    { id: 2, quantity: 10, amount: 100, postingYear: 2020, postingMonth: 'January', actionType: 'Type2', actionNumber: '001', actionName: 'Action2', status: 'Pending', Impact: "Mid" },
    { id: 3, quantity: 120, amount: 100, postingYear: 2020, postingMonth: 'January', actionType: 'Type1', actionNumber: '001', actionName: 'Action1', status: 'Pending', Impact: "Low" },
    { id: 4, quantity: 132, amount: 100, postingYear: 2020, postingMonth: 'January', actionType: 'Type3', actionNumber: '001', actionName: 'Action3', status: 'Pending', Impact: "High" },
    { id: 5, quantity: 10, amount: 100, postingYear: 2020, postingMonth: 'January', actionType: 'Type2', actionNumber: '001', actionName: 'Action3', status: 'Pending', Impact: "Low" },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard role={userRole} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        {isLoggedIn && (
          <div>
            <ImpactChart data={data} />
            <RecordsList data={data} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
