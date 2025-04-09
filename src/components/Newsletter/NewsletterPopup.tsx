import React from 'react';
import styled from '@emotion/styled';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import headerImage from '../../images/header.png';

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const PopupContainer = styled(motion.div)`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  padding: 64px;
  max-width: 900px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 48px 32px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

const Logo = styled.svg`
  width: 180px;
  height: auto;
  margin-bottom: 40px;
  filter: drop-shadow(0 0 8px rgba(224, 18, 18, 0.3));
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 560px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 24px;
  font-size: 16px;
  border-radius: 4px;
  color: #FFFFFF;
  backdrop-filter: blur(8px);

  &:focus {
    outline: none;
    border-color: #E01212;
    box-shadow: 0 0 0 2px rgba(224, 18, 18, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SubmitButton = styled.button`
  background: #E01212;
  color: #FFFFFF;
  border: none;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #FF1A1A;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(224, 18, 18, 0.3);
  }
`;

interface NewsletterPopupProps {
  onClose: () => void;
  isVisible?: boolean;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose, isVisible = true }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  if (!isVisible) return null;

  return (
    <LazyMotion features={domAnimation}>
      <PopupOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <PopupContainer
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>×</CloseButton>
          <ContentWrapper>
            <Logo viewBox="0 0 435 473" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M126.894 109.606C119.416 102.127 111.028 96.9229 101.73 93.9921C106.682 84.8968 109.158 74.7909 109.158 63.6744C109.158 46.0901 102.943 31.0757 90.5128 18.6454C78.0826 6.21513 63.0681 0 45.4838 0H0V218.309H81.8723C99.4565 218.309 114.464 212.094 126.894 199.657C139.324 187.226 145.539 172.219 145.539 154.635C145.539 137.051 139.324 122.043 126.894 109.606ZM36.3885 36.3813H45.4838C53.0632 36.3813 59.5093 39.0377 64.8149 44.3433C70.1205 49.6489 72.7697 56.095 72.7697 63.6744C72.7697 71.2539 70.1205 77.6928 64.8149 82.9984C59.5093 88.304 53.0632 90.9604 45.4838 90.9604H36.3885V36.3813ZM101.196 173.966C95.8906 179.272 89.4517 181.921 81.8723 181.921H36.3885V127.349H81.8723C89.4517 127.349 95.8906 129.998 101.196 135.304C106.502 140.609 109.158 147.055 109.158 154.635C109.158 162.214 106.502 168.66 101.196 173.966Z" fill="#E01212"/>
              <path d="M350.054 31.9854C328.731 10.662 303.004 0.00025177 272.888 0.00025177C242.773 0.00025177 217.046 10.662 195.723 31.9854C174.399 53.3161 163.737 79.0357 163.737 109.151C163.737 139.267 174.399 164.994 195.723 186.317C217.046 207.648 242.773 218.309 272.888 218.309C303.004 218.309 328.731 207.648 350.054 186.317C371.378 164.994 382.039 139.274 382.039 109.151C382.039 79.0284 371.378 53.3161 350.054 31.9854ZM324.356 160.626C310.158 174.825 292.999 181.921 272.888 181.921C252.778 181.921 235.619 174.825 221.42 160.626C207.222 146.428 200.119 129.269 200.119 109.151C200.119 89.0333 207.222 71.8821 221.42 57.6833C235.619 43.4845 252.778 36.3815 272.888 36.3815C292.999 36.3815 310.158 43.4845 324.356 57.6833C338.555 71.8821 345.658 89.0405 345.658 109.151C345.658 129.262 338.555 146.428 324.356 160.626Z" fill="#E01212"/>
              <path d="M382.054 363.856C382.054 393.972 371.37 419.662 350.04 440.986C328.716 462.309 303.018 473 272.91 473H0.00012207V254.712H36.3814V436.619H272.91C292.999 436.619 310.15 429.494 324.349 415.295C338.548 401.14 345.673 383.945 345.673 363.856C345.673 343.767 338.548 326.573 324.349 312.374C310.576 298.601 294.096 291.57 274.809 291.144C274.188 291.094 273.524 291.094 272.91 291.094V291.144H200.148V400.671H163.86V254.813H276.664C283.269 254.958 289.679 255.716 295.85 257.001C316.322 261.086 334.368 271.012 350.04 286.683C371.363 308.007 382.054 333.755 382.054 363.863V363.856Z" fill="#E01212"/>
            </Logo>
            <Title>Get exclusive design insights and Bold brand updates.</Title>
            <Description>No spam, just bold ideas.</Description>
            <Form onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />
              <SubmitButton type="submit">Sign up</SubmitButton>
            </Form>
          </ContentWrapper>
        </PopupContainer>
      </PopupOverlay>
    </LazyMotion>
  );
};

export default NewsletterPopup; 