// main.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Change 'Switch' to 'Routes'
import HomePage from './Components/HomePage';

const Main = () => {
  return (
    <Router>
      <Routes>  {/* Change 'Switch' to 'Routes' */}
        <Route path="/" element={<HomePage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default Main;
