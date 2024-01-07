// App.js
import React from 'react';
import Main from './main';
import './Components/Styles.css'; // Adjust the path based on your structure
import HomePage from './HomePage';

const App = () => {
  return (
    <div>
      <HomePage />
      <Main />
    </div>
  );
};

export default App;
