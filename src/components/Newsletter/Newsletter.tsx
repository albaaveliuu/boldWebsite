import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import headerImage from '../../images/header.png';
import { ReactComponent as BoldLogo } from '../../images/boldLogoRed.svg';

const NewsletterSection = styled.section`
  padding: 80px 20px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsletterBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  background: #000000;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
`;

const NewsletterContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(BoldLogo)`
  width: 140px;
  height: auto;
  margin-bottom: 40px;
  path {
    fill: #E01212;
  }
`;

const FormTitle = styled.h3`
  font-size: 12px;
  color: #FFFFFF;
  margin: 0 0 4px 0;
  font-weight: 400;
  letter-spacing: 0.2px;
  max-width: 400px;
  text-align: center;
  line-height: 1.5;
`;

const FormSubtitle = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 20px 0;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  gap: 4px;
`;

const Input = styled.input`
  flex: 1;
  height: 36px;
  padding: 0 12px;
  background: #FFFFFF;
  border: none;
  color: #000000;
  font-size: 13px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  height: 36px;
  padding: 0 16px;
  background: #E01212;
  color: #FFFFFF;
  border: none;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;

  &:hover {
    background: #FF1414;
  }
`;

const Newsletter: React.FC = () => {
  return (
    <NewsletterSection>
      <NewsletterBox>
        <BackgroundImage 
          src={headerImage}
          alt="Newsletter Background" 
        />
        <NewsletterContainer>
          <Logo />
          <FormTitle>Get exclusive design insights and Bold brand updates.</FormTitle>
          <FormSubtitle>No spam, just bold ideas.</FormSubtitle>
          <Form>
            <Input type="email" placeholder="Enter your email" />
            <SubmitButton type="submit">Sign up</SubmitButton>
          </Form>
        </NewsletterContainer>
      </NewsletterBox>
    </NewsletterSection>
  );
};

export default Newsletter; 