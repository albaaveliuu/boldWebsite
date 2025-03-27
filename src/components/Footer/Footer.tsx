import React from 'react';
import styled from '@emotion/styled';
import horizontalLogo from '../../images/horizontalLogo.svg';

const FooterContainer = styled.footer`
  background: #1E1E1E;
  padding: 40px 120px;
  color: #FFFFFF;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterLogo = styled.img`
  height: 40px;
  width: auto;
  margin: 0 auto;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1) invert(0);
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #C9C9C9;
  margin: 0;
  line-height: 1.6;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #C9C9C9;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #E01212;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #888;
  margin: 20px 0 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src={horizontalLogo} alt="Bold" />
        <FooterText>
          Creating innovative digital experiences through design and technology
        </FooterText>
        <FooterLinks>
          <FooterLink href="#work">Work</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        <Copyright>
          © {new Date().getFullYear()} Bold. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 