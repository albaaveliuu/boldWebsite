import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as BoldLogo } from '../../images/boldLogoRed.svg';

const FooterSection = styled.footer`
  background: #1E1E1E;
  padding: 60px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
    align-items: center;
    text-align: center;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 30px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 30px;
  }
`;

const Logo = styled(BoldLogo)`
  width: 60px;
  height: auto;
  path {
    fill: #FFFFFF;
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
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

  @media (max-width: 768px) {
    font-size: 13px;
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

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Copyright = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Syne', sans-serif;
  opacity: 0.6;

  @media (max-width: 768px) {
    font-size: 13px;
    order: 2;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <LeftColumn>
          <Logo />
          <LinkGroup>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms & Conditions</FooterLink>
            <FooterLink to="/imprint">Imprint</FooterLink>
          </LinkGroup>
        </LeftColumn>
        <RightColumn>
          <Copyright>© 2024 Bold Kreativ L.L.C.</Copyright>
          <LinkGroup>
        
            <ExternalLink href="https://linkedin.com/company/boldkreativ" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://www.instagram.com/bold.kreativ/#" target="_blank" rel="noopener noreferrer">
             Instagram
            </ExternalLink>
          </LinkGroup>
        </RightColumn>
      </Container>
    </FooterSection>
  );
};

export default Footer; 