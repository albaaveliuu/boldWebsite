import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/boldLogoRed.svg';

const FooterContainer = styled.footer`
  background: #1E1E1E;
  padding: 24px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  svg {
    width: 32px;
    height: 32px;
    path {
      fill: #FFFFFF;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const FooterLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Syncopate', sans-serif;
  font-size: 11px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 1;
  }
`;

const SocialLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Syncopate', sans-serif;
  font-size: 11px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 1;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <LinksContainer>
          <FooterLink to="/privacy">Data Privacy</FooterLink>
          <FooterLink to="/imprint">Imprint</FooterLink>
          <FooterLink to="/terms">Terms & Conditions</FooterLink>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</SocialLink>
        </LinksContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 