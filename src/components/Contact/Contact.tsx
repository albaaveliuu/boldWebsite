import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import astronautImage from '../../images/astronaut.png';
import { ReactComponent as SloganSVG } from '../../images/Slogan.svg';

const ContactSection = styled.section`
  padding: 100px 20px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 2000px;
  padding: 0 20px;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000000;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1200px;
  background: #000000;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  background: #000000;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormTitle = styled.div`
  margin: 0 0 20px 0;
  svg {
    width: auto;
    height: 32px;
    path {
      fill: #FFFFFF;
    }
  }
`;

const CollaborateText = styled.h4`
  font-size: 24px;
  color: #FFFFFF;
  margin: 20px 0;
  font-weight: 500;
`;

const FormSubtitle = styled.p`
  font-size: 16px;
  color: #FFFFFF;
  margin: 0 0 40px 0;
  line-height: 1.6;
  opacity: 0.8;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 32px;
  background: #E01212;
  color: #FFFFFF;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  margin-top: 10px;

  &:hover {
    background: #FF1414;
  }
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <SectionTitleContainer>
        <SectionTitle>Contact</SectionTitle>
        <TitleLine />
      </SectionTitleContainer>
      <ContactContainer>
        <FormSection>
          <FormTitle>
            <SloganSVG />
          </FormTitle>
          <CollaborateText>Let's Collaborate!</CollaborateText>
          <FormSubtitle>
            Have a project in mind? We'd love to hear about it. Drop us a message and let's make something extraordinary.
          </FormSubtitle>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
            <TextArea placeholder="Tell us more..." />
            <SubmitButton type="submit">CONTACT US</SubmitButton>
          </Form>
        </FormSection>
        <ImageSection>
          <BackgroundImage 
            src={astronautImage}
            alt="Astronaut Background" 
          />
        </ImageSection>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 