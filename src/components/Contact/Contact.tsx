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
  font-family: 'Hando', sans-serif;
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
  font-family: 'Hando', sans-serif;
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: -100px;
  
  svg {
    width: auto;
    height: 120px;
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: -100px;
  font-family: 'Hando', sans-serif;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Hando', sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Hando', sans-serif;
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
  font-family: 'Hando', sans-serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Hando', sans-serif;
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
  font-family: 'Hando', sans-serif;

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
  display: flex;
  align-items: center;
  justify-content: center;
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
          <Form>
            <InputRow>
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Company" />
            </InputRow>
            <InputRow>
              <Input type="text" placeholder="Subject" />
              <Input type="tel" placeholder="Phone" />
            </InputRow>
            <TextArea placeholder="Give us more..." />
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