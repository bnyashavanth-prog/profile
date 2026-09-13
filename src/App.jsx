import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { YvbCo } from './sections/YvbCo';
import { Work } from './sections/Work';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-accent-orange selection:text-dark-bg overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <YvbCo />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
