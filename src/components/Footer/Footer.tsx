import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background: #1E1E1E;
  padding: 60px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url(${require('../../images/aboutus/sloganhorizontal.png')});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.02;
    z-index: 1;
    mix-blend-mode: screen;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const LogoContainer = styled.div`
  img {
    height: 40px;
    width: auto;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 120px;
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 40px;
`;

const FooterLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Hando', sans-serif;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const ExternalLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Hando', sans-serif;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Hando', sans-serif;
  opacity: 0.6;
  text-align: right;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <LogoContainer>
            <img src={require('../../images/boldLogoRed.svg').default} alt="Bold Kreativ" />
          </LogoContainer>
          <LinksContainer>
            <LinkGroup>
              <FooterLink to="/data-privacy">Data Privacy</FooterLink>
              <FooterLink to="/imprint">Imprint</FooterLink>
              <FooterLink to="/terms">Terms & Conditions</FooterLink>
            </LinkGroup>
            <LinkGroup>
              <ExternalLink href="https://instagram.com/boldkreativ" target="_blank" rel="noopener noreferrer">
                Instagram
              </ExternalLink>
              <ExternalLink href="https://linkedin.com/company/boldkreativ" target="_blank" rel="noopener noreferrer">
                Linked In
              </ExternalLink>
              <ExternalLink href="https://facebook.com/boldkreativ" target="_blank" rel="noopener noreferrer">
                Facebook
              </ExternalLink>
            </LinkGroup>
          </LinksContainer>
        </FooterContent>
        <Copyright>
          © 2024 Bold Kretiv L.L.C.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 