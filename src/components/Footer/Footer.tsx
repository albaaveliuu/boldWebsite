import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as BoldLogo } from '../../images/boldLogoRed.svg';

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
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
`;

const Logo = styled(BoldLogo)`
  width: 60px;
  height: auto;
  path {
    fill: #FFFFFF;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Syne', sans-serif;
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
  font-family: 'Syne', sans-serif;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Syne', sans-serif;
  opacity: 0.6;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <LeftColumn>
          <Logo />
          <LinkGroup>
            <FooterLink to="/data-privacy">Data Privacy</FooterLink>
            <FooterLink to="/imprint">Imprint</FooterLink>
            <FooterLink to="/terms">Terms & Conditions</FooterLink>
          </LinkGroup>
        </LeftColumn>
        <RightColumn>
          <Copyright>© 2024 Bold Kretiv L.L.C.</Copyright>
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
        </RightColumn>
      </Container>
    </FooterSection>
  );
};

export default Footer; 