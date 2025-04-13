import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const OfferSection = styled.section`
  background: #1E1E1E;
  padding: 100px 0;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 64px;
  font-weight: 700;
  font-family: 'Hando', sans-serif;
  margin-bottom: 60px;
  text-transform: uppercase;
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  background: #252525;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 40px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ServiceContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
`;

const ServiceTitle = styled.h3`
  color: #FFFFFF;
  font-size: 48px;
  font-family: 'Hando', sans-serif;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const ServiceDescription = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 500px;
`;

const WhatWeOffer: React.FC = () => {
  return (
    <OfferSection id="whatweoffer">
      <Container>
        <Title>WHAT WE OFFER</Title>
        <ServiceCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ServiceImage 
            src="/images/services/mockupone.png" 
            alt="Branding Service"
          />
          <ServiceContent>
            <ServiceTitle>BRANDING</ServiceTitle>
            <ServiceDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </ServiceDescription>
          </ServiceContent>
        </ServiceCard>
      </Container>
    </OfferSection>
  );
};

export default WhatWeOffer; 