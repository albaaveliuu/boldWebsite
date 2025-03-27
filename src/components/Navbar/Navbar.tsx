import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #E01212;
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: scrolled ? 'rgba(30, 30, 30, 0.95)' : 'transparent'
      }}
    >
      <NavLinks>
        <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
        <NavLink onClick={() => scrollToSection('work')}>Work</NavLink>
        <NavLink onClick={() => scrollToSection('services')}>Services</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar; 