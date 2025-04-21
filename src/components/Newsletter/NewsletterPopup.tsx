import React from 'react';
import styled from '@emotion/styled';
import { motion, domAnimation, LazyMotion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
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
  max-width: 900px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  background: white;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background: white;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
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

const Title = styled.h3`
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 16px;
  color: #1E1E1E;
  text-align: center;
  font-family: 'Hando', sans-serif;
  line-height: 1.0;
  white-space: pre-line;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 560px;
  margin-top: 8px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Input = styled.input`
  flex: 1;
  background: #F5F5F5;
  border: none;
  padding: 14px 24px;
  font-size: 16px;
  border-radius: 4px;
  color: #1E1E1E;
  font-family: 'Hando', sans-serif;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(224, 18, 18, 0.3);
  }

  &::placeholder {
    color: #666;
    font-family: 'Hando', sans-serif;
  }
`;

const SubmitButton = styled.button`
  background: #E01212;
  color: #FFFFFF;
  border: none;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Hando', sans-serif;
  
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

interface NewsletterPopupState {
  email: string;
  isSubmitting: boolean;
  isSuccess: boolean;
}

class NewsletterPopup extends React.Component<NewsletterPopupProps, NewsletterPopupState> {
  constructor(props: NewsletterPopupProps) {
    super(props);
    this.state = {
      email: '',
      isSubmitting: false,
      isSuccess: false
    };
  }

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    
    try {
      const response = await fetch('https://formspree.io/f/mnndabbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.state.email })
      });
      
      if (response.ok) {
        this.setState({ isSuccess: true });
        setTimeout(() => {
          this.props.onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      this.setState({ isSubmitting: false });
    }
  };

  render() {
    const { onClose, isVisible = true } = this.props;
    const { isSuccess, isSubmitting, email } = this.state;

    if (isSuccess) {
      return (
        <LazyMotion features={domAnimation}>
          <PopupOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PopupContainer
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <ImageSection>
                <CloseButton onClick={onClose}>×</CloseButton>
              </ImageSection>
              <ContentWrapper>
                <Title>
                  Thank you for subscribing!
                  We'll keep you updated with our latest news and offers.
                </Title>
              </ContentWrapper>
            </PopupContainer>
          </PopupOverlay>
        </LazyMotion>
      );
    }

    if (!isVisible) return null;

    return (
      <LazyMotion features={domAnimation}>
        <PopupOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PopupContainer
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <ImageSection>
              <CloseButton onClick={onClose}>×</CloseButton>
            </ImageSection>
            <ContentWrapper>
              <Title>
                Get exclusive design insights and Bold brand updates.
                {'\n'}
                No spam, just bold ideas.
              </Title>
              <Form onSubmit={this.handleSubmit}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </SubmitButton>
              </Form>
            </ContentWrapper>
          </PopupContainer>
        </PopupOverlay>
      </LazyMotion>
    );
  }
}

export default NewsletterPopup; 