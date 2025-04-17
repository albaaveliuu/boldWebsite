import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  background: #1E1E1E;
  padding: 0;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 96px;
  font-weight: 700;
  font-family: 'Syncopate', sans-serif;
  margin: 80px 0;
  text-transform: uppercase;
  padding: 0 20px;
  line-height: 1;
  letter-spacing: -2px;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 120px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  
  &:hover {
    img {
      transform: scale(1.02);
    }
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  filter: brightness(0.7);
`;

const ServiceContent = styled.div`
  position: relative;
  width: calc(100% - 500px);
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  margin-left: -200px;
  justify-content: center;
  height: 100%;
  padding-top: 60px;
`;

const ServiceTitle = styled.h3`
  color: #FFFFFF;
  font-size: 84px;
  font-weight: 700;
  font-family: 'Syncopate', sans-serif;
  margin-bottom: 60px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;
  z-index: 2;
`;

const ServiceDescription = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 400px;
  margin-left: 220px;
  position: relative;
  z-index: 2;
  font-family: 'Syncopate', sans-serif;
  margin-bottom: 0;
`;

const Services: React.FC = () => {
  const handleEventHostingClick = () => {
    const link = document.createElement('a');
    link.href = '/images/services/Event Hosting Bold.pdf';
    link.download = 'Event Hosting Bold.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      title: 'BRANDING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: require('../../images/services/Branding.png')
    },
    {
      title: 'VIDEO &\nPRODUCTION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: require('../../images/services/VideoAndProduction.png')
    },
    {
      title: 'BUSINESS\nEVENT\nHOSTING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: require('../../images/services/BusinessEventHosting.png'),
      onClick: handleEventHostingClick
    },
    {
      title: 'MOTION\nDESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: require('../../images/services/MotionDesign.png')
    },
    {
      title: 'DIGITAL\nMARKETING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: require('../../images/services/DigitalMarketing.png')
    },
    {
      title: 'WEB DESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: require('../../images/services/WebDesign.png')
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <Title>WHAT WE<br />OFFER</Title>
        <ServicesList>
          {services.map((service, index) => (
            <ServiceItem key={index}>
              <ServiceImageContainer onClick={service.onClick}>
                <ServiceImage src={service.image} alt={service.title} />
              </ServiceImageContainer>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceContent>
            </ServiceItem>
          ))}
        </ServicesList>
      </Container>
    </ServicesSection>
  );
};

export default Services; 