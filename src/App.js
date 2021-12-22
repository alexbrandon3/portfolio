import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  const [selectedTab, setSelectedTab] = useState(1);
  const renderCorrectTab = () => {
    switch (selectedTab) {
      case 1:
        return <div>About</div>
      case 2:
        return <div>different</div>
    default:

    }
  }
  return (
    <div className="App">
      <Navbar selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      />
      {renderCorrectTab()}
    </div>
  );
}

export default App;
