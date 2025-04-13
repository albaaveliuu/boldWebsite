import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/boldLogoRed.svg';

const FooterContainer = styled.footer`
  background: #1E1E1E;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LogoContainer = styled(Link)`
  svg {
    width: 40px;
    height: 40px;
    path {
      fill: #FFFFFF;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FooterLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const RedDot = styled.span`
  width: 4px;
  height: 4px;
  background: #E01212;
  border-radius: 50%;
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <LinksContainer>
          <FooterLink to="/privacy">Data Privacy</FooterLink>
          <FooterLink to="/imprint">Imprint</FooterLink>
          <FooterLink to="/terms">Terms & Conditions</FooterLink>
        </LinksContainer>
        <SocialLinks>
          <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 