import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import boldLogoRed from '../../images/boldLogoRed.svg';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const NavGroup = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
`;

const NavLink = styled.a<{ $isActive?: boolean }>`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${props => props.$isActive && `
    color: #E01212;
  `}

  &:hover {
    color: #E01212;
  }
`;

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <NavGroup>
        <NavLink 
          onClick={() => scrollToSection('home')}
          $isActive={activeSection === 'home'}
        >
          Home
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('about')}
          $isActive={activeSection === 'about'}
        >
          About
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('services')}
          $isActive={activeSection === 'services'}
        >
          Services
        </NavLink>
      </NavGroup>
      <Logo 
        src={boldLogoRed} 
        alt="Bold" 
        onClick={() => scrollToSection('home')}
      />
      <NavGroup>
        <NavLink 
          onClick={() => scrollToSection('work')}
          $isActive={activeSection === 'work'}
        >
          Work
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('contact')}
          $isActive={activeSection === 'contact'}
        >
          Contact
        </NavLink>
      </NavGroup>
    </NavbarContainer>
  );
};

export default Navbar; 