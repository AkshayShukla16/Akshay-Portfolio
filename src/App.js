import React from 'react';
import './App.css';
import Navigation from './components/NavBar'
import Mybanner from './components/Mybanner'
import Skills from './components/Skills'
import Projects from './components/Project'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Mybanner />
      <Skills />  
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
