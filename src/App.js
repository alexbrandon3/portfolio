import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';


function App() {
  const [selectedTab, setSelectedTab] = useState('About');
  const renderChosenTab = () => {
    switch (selectedTab) {
      case 'Work':
        return <Work/>
      case 'Contact Me':
        return <Contact/>
      case 'Resume':
        return <Resume/>
      default:
        return <About/>

    }
  }
  return (
    <div className="App">
      <Navbar selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      />
      {renderChosenTab()}
    </div>
  );
}

export default App;
