import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import astronautImage from '../../images/astronaut.png';
import sloganImage from '../../images/aboutus/sloganhorizontal.png';

const ContactSection = styled.section`
  padding: 100px 20px;
  background: #1e1e1e;
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
  max-width: 1200px;
  padding: 0 40px;
  margin-bottom: 60px;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 95px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 40px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  white-space: nowrap;
  color: #FFFFFF;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1200px;
  background:rgb(255, 255, 255);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background: #FFFFFF;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const FormTitle = styled.div`
  margin: 0 0 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: -100px;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
  
  svg {
    width: auto;
    height: 120px;
    path {
      fill: #1e1e1e;
    }
  }
`;

const CollaborateText = styled.h4`
  font-size: 24px;
  color: #1e1e1e;
  margin: 20px 0;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: -100px;
  font-family: 'Hando', sans-serif;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
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
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background: #E5E5E5;
  border: none;
  color: #1e1e1e;
  font-size: 16px;
  font-family: 'Hando', sans-serif;

  &::placeholder {
    color: #1e1e1e;
    font-family: 'Hando', sans-serif;
  }

  &:focus {
    outline: none;
    background: #D9D9D9;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background: #E5E5E5;
  border: none;
  color: #1e1e1e;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: 'Hando', sans-serif;

  &::placeholder {
    color: #1e1e1e;
    font-family: 'Hando', sans-serif;
  }

  &:focus {
    outline: none;
    background: #D9D9D9;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 32px;
  background: #1e1e1e;
  color: #FFFFFF;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;
  min-width: 160px;
  display: block;
  margin: 10px auto 0;
  font-family: 'Hando', sans-serif;

  &:hover {
    background: #333333;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${astronautImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #1E1E1E;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #1E1E1E;
  margin-bottom: 40px;
`;

const SloganImage = styled.img`
  width: 100%;
  max-width: 902px;
  height: auto;
  filter: brightness(0); /* This makes the image black */
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <SectionTitleContainer>
        <SectionTitle>CONTACT US</SectionTitle>
      </SectionTitleContainer>
      <ContactContainer>
        <FormSection>
          <SloganImage src={sloganImage} alt="Slogan" />
          <FormTitle>
            Get in Touch
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
            <TextArea placeholder="Give us more ..." />
            <SubmitButton type="submit">Contact us</SubmitButton>
          </Form>
        </FormSection>
        <ImageContainer />
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 