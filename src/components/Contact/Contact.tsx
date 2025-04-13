import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as SloganSVG } from '../../images/Slogan.svg';
import astronautImage from '../../images/astronaut.png';

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
  max-width: 2000px;
  padding: 0 20px;
  margin-bottom: 60px;
`;



const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1200px;
  background:rgb(255, 255, 255);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const FormSection = styled.div`
  background: #FFFFFF;
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

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <SectionTitleContainer>
       
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