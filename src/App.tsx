import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import all page components
import EventPromotions from './pages/EventPromotions';
import DigitalMarketing from './pages/DigitalMarketing';
import SpeakerBureau from './pages/SpeakerBureau';
import CommunityBuilding from './pages/CommunityBuilding';
import TechSolutions from './pages/TechSolutions';
import CreativeSupport from './pages/CreativeSupport';
import AboutWyntrix from './pages/AboutWyntrix';
import StudentNetwork from './pages/StudentNetwork';
import SuccessStories from './pages/SuccessStories';
import Events from './pages/Events';
import JoinUs from './pages/JoinUs';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <WhyUs />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Service Pages */}
          <Route path="/services/event-promotions" element={<EventPromotions />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/speaker-bureau" element={<SpeakerBureau />} />
          <Route path="/services/community-building" element={<CommunityBuilding />} />
          <Route path="/services/tech-solutions" element={<TechSolutions />} />
          <Route path="/services/creative-support" element={<CreativeSupport />} />
          
          {/* Community Pages */}
          <Route path="/about-wyntrix" element={<AboutWyntrix />} />
          <Route path="/student-network" element={<StudentNetwork />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;