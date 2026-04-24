import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
// import { useEffect } from 'react';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Page Components
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (

    // Suspense prevents the app from crashing while translations load
    <Suspense fallback={<div>Loading Translations...</div>}>


    <Router>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            
            {/* Fallback to Home if a user types a wrong URL */}
            <Route path="*" element={<Home />} />
          
        </Routes>
        </main>

        {/* The button stays on top of everything */}
        <WhatsAppButton />

        {/* 5. Global Footer */}
        <Footer />
        
      </div>
    </Router>
    </Suspense>
  );
}

export default App;
