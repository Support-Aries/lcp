import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Challenges from './components/Challenges/Challenges';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Action from './components/Action/Action';
import SkillLevels from './components/SkillLevels/SkillLevels';
import Benefits from './components/Benefits/Benefits';
import InvestmentLogic from './components/InvestmentLogic/InvestmentLogic';
import Industries from './components/Industries/Industries';
import CareerPathway from './components/CareerPathway/CareerPathway';
import Contact from './components/Contact/Contact';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-orange-500/30 selection:text-orange-900">
      <main>
        <Hero />
        <About />
        <Challenges />
        <HowItWorks />
        <Action />
        <SkillLevels />
        <Benefits />
        <InvestmentLogic />
        <Industries />
        <CareerPathway />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
