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
  font-family: 'Syne', sans-serif;
  margin-bottom: 40px;
  color: #F30100;
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
          <p> Advertising Studio<br />
          Mustafa Venhari <br />
          10000 Prishtinë<br />
          Kosovo</p>
       



          <h2>Contact</h2>
      
          <p>Email: info@bold-kreativ.com</p>

          <h2>Management</h2>
          <p>Managing Director: Buna Pula</p>

          <h2>Registration</h2>
          <p>Unique Identification Number: 812252790<br />
          Registered in QKB/ARBK</p>

         
        </Content>
      </Container>
    </PageContainer>
  );
};

export default Imprint; 