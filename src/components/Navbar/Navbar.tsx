import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
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
`;

const NavGroup = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;

  &.left-nav {
    justify-content: flex-start;
  }

  &.right-nav {
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

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    transform: none;
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

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  display: none;
  font-size: 28px;
  padding: 0;
  z-index: 1002;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const MobileNavLink = styled(motion.div)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? '#E01212' : '#FFFFFF'};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  
  &:hover {
    color: #E01212;
  }
`;

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveSection('home');
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <LazyMotion features={domAnimation}>
      <NavbarContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <NavGroup className="left-nav">
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
        </NavGroup>
        <Logo 
          src={iconImage} 
          alt="Bold" 
          onClick={() => scrollToSection('home')}
        />
        <NavGroup className="right-nav">
          <NavLink 
            onClick={() => scrollToSection('services')}
            $isActive={activeSection === 'services'}
          >
            Services
          </NavLink>
          <NavLink 
            onClick={() => scrollToSection('contact')}
            $isActive={activeSection === 'contact'}
          >
            Contact
          </NavLink>
        </NavGroup>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavbarContainer>
      
      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <MobileNavLinks>
            <MobileNavLink
              onClick={() => {
                scrollToSection('home');
                setIsMobileMenuOpen(false);
              }}
              $isActive={activeSection === 'home'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
              $isActive={activeSection === 'about'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              onClick={() => {
                scrollToSection('services');
                setIsMobileMenuOpen(false);
              }}
              $isActive={activeSection === 'services'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Services
            </MobileNavLink>
            <MobileNavLink
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              $isActive={activeSection === 'about'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Contact
            </MobileNavLink>
          </MobileNavLinks>
        </MobileMenu>
      )}
    </LazyMotion>
  );
};

export default Navbar; 