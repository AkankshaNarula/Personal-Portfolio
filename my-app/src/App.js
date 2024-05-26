import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import TechStacks from './components/TechStacks';
import CodingProfiles from './components/CodingProfiles';
import ContactMe from './components/ContactMe';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16"> {/* Ensure content does not hide behind the navbar */}
        <About />
        <Achievements />
        <Projects />
        <TechStacks />
        <CodingProfiles />
        <ContactMe />
      </main>
    </div>
  );
};

export default App;
