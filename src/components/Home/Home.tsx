import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Hero from '../Hero/Hero';
import Work from '../Work/Work';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import HowWeWork from '../HowWeWork/HowWeWork';

const HomeContainer = styled(motion.div)`
  min-height: 100vh;
  background: #1E1E1E;
  color: #EEEEEE;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <HowWeWork />
      <Work />
      <Newsletter />
      <Contact />
      <Footer />
    </HomeContainer>
  );
};

export default Home; 