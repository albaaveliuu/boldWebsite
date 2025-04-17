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

const Imprint: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Title>Imprint</Title>
        <Content>
          <h2>Company Information</h2>
          <p>Digital Studio<br />
          123 Creative Street<br />
          10115 Berlin<br />
          Germany</p>

          <h2>Contact</h2>
          <p>Phone: +49 (0) 123 456 789<br />
          Email: info@digitalstudio.com</p>

          <h2>Management</h2>
          <p>Managing Director: Buna Pula</p>

          <h2>Registration</h2>
          <p>Commercial Register: District Court Berlin<br />
          Registration Number: HRB 123456</p>

          <h2>VAT ID</h2>
          <p>VAT identification number according to § 27a Value Added Tax Act:<br />
          DE123456789</p>

          <h2>Responsible for Content</h2>
          <p>Buna Pula<br />
          Digital Studio<br />
          123 Creative Street<br />
          10115 Berlin</p>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default Imprint; 