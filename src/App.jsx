import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/landingpage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;