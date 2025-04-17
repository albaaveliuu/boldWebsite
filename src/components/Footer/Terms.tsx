import React from 'react';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  background: #1E1E1E;
  min-height: 100vh;
  padding: 120px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  color: #FFFFFF;
`;

const Title = styled.h1`
  font-size: 48px;
  font-family: 'Syncopate', sans-serif;
  margin-bottom: 40px;
  color: #FFFFFF;
`;

const Content = styled.div`
  font-family: 'Syncopate', sans-serif;
  line-height: 1.6;
  
  h2 {
    font-size: 24px;
    margin: 40px 0 20px;
  }
  
  p {
    margin-bottom: 20px;
    opacity: 0.8;
  }
`;

const Terms: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Title>Terms & Conditions</Title>
        <Content>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>

          <h2>2. Services</h2>
          <p>We provide creative and digital services including branding, video production, event hosting, motion design, digital marketing, and web design.</p>

          <h2>3. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is our property and protected by intellectual property laws.</p>

          <h2>4. User Responsibilities</h2>
          <p>You agree not to use our website for any unlawful purpose or in any way that could damage or impair the site's functionality.</p>

          <h2>5. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>

          <h2>7. Contact</h2>
          <p>For any questions about these Terms & Conditions, please contact us at legal@digitalstudio.com</p>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default Terms; 