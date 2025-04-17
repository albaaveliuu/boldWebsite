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

const PrivacyPolicy: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Title>Data Privacy Policy</Title>
        <Content>
          <h2>1. Data Collection</h2>
          <p>We collect information that you provide directly to us, including when you contact us through our website or sign up for our newsletter.</p>

          <h2>2. Use of Information</h2>
          <p>We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations.</p>

          <h2>3. Data Protection</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.</p>

          <h2>4. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may also withdraw your consent at any time.</p>

          <h2>5. Contact</h2>
          <p>For any questions about this Privacy Policy, please contact us at privacy@digitalstudio.com</p>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default PrivacyPolicy; 