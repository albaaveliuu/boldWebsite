import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Slogan from './components/Slogan/Slogan';
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import Imprint from './components/Footer/Imprint';
import Terms from './components/Footer/Terms';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: #1E1E1E;
  }

  body {
    font-family: 'Syne', sans-serif;
    background: #1E1E1E;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }

  p, a, button, input, textarea {
    font-family: 'Syne', sans-serif;
  }

  section {
    scroll-margin-top: 80px;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section id="hero"><Hero /></section>
            <section id="services"><Services /></section>
          
            <section id="team"><Team /></section>
            <section id="contact"><Contact /></section>
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
