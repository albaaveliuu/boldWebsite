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
  font-family: 'Hando', sans-serif;
  margin: 80px 0;
  text-transform: uppercase;
  padding: 0 20px;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  padding: 0 40px;
`;

const ServiceImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  
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
  width: 50%;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  margin-left: -200px;
`;

const ServiceTitle = styled.h3`
  color: #FFFFFF;
  font-size: 84px;
  font-weight: 700;
  font-family: 'Hando', sans-serif;
  margin-bottom: 40px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;
  z-index: 2;
`;

const ServiceDescription = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 400px;
  margin-left: 100px;
  position: relative;
  z-index: 2;
`;

const Services: React.FC = () => {
  const services = [
    {
      title: 'BRANDING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: '/images/services/mockupone.png'
    },
    {
      title: 'VIDEO &\nPRODUCTION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67'
    },
    {
      title: 'BUSINESS\nEVENT\nHOSTING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865'
    },
    {
      title: 'MOTION\nDESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
    },
    {
      title: 'DIGITAL\nMARKETING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48'
    },
    {
      title: 'WEB DESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166'
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <Title>WHAT WE<br />OFFER</Title>
        <ServicesList>
          {services.map((service, index) => (
            <ServiceItem key={index}>
              <ServiceImageContainer>
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