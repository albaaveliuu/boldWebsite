import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import iconImage from '../../images/icon.png';

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
  background: rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const NavGroup = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
  transition: opacity 0.3s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    opacity: 0.8;
  }
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
  
  &:hover {
    color: #E01212;
  }
`;

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
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
        src={iconImage} 
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