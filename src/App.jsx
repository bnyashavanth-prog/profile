import React, { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Cursor } from './components/Cursor';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';

// Lazy-load below-the-fold sections
const Work = lazy(() => import('./sections/Work').then(m => ({ default: m.Work })));
const Skills = lazy(() => import('./sections/Skills').then(m => ({ default: m.Skills })));
const Timeline = lazy(() => import('./sections/Timeline').then(m => ({ default: m.Timeline })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-accent-orange selection:text-dark-bg overflow-x-hidden bg-grain">
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Suspense fallback={<div className="min-h-screen bg-dark-bg" />}>
          <Work />
          <Skills />
          <Timeline />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
