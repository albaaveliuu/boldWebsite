import React from 'react';
import styled from '@emotion/styled';

const SloganSection = styled.div`
  position: relative;
  padding: 120px 20px;
  background: #1E1E1E;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Line1 = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Line2 = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Line3 = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.3;

  span {
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Slogan: React.FC = () => {
  return (
    <SloganSection>
      <TextContainer>
       
      </TextContainer>
    </SloganSection>
  );
};

export default Slogan; 