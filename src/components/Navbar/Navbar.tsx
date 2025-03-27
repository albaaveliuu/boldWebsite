import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 1.1rem;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #E01212;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const linkVariants = {
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <NavbarContainer
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <NavLinks>
        <NavLink 
          onClick={() => scrollToSection('hero')}
          variants={linkVariants}
          whileHover="hover"
        >
          Home
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('work')}
          variants={linkVariants}
          whileHover="hover"
        >
          Work
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('services')}
          variants={linkVariants}
          whileHover="hover"
        >
          Services
        </NavLink>
        <NavLink 
          onClick={() => scrollToSection('contact')}
          variants={linkVariants}
          whileHover="hover"
        >
          Contact
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar; 