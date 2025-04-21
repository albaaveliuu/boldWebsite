import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion';

// Import service images
import brandingImage from '../../images/services/Branding.png';
import videoProductionImage from '../../images/services/VideoAndProduction.png';
import businessEventImage from '../../images/services/BusinessEventHosting.png';
import motionDesignImage from '../../images/services/MotionDesign.png';
import digitalMarketingImage from '../../images/services/DigitalMarketing.png';
import webDesignImage from '../../images/services/WebDesign.png';

const ServicesSection = styled.section`
  background: #1E1E1E;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: left;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin-bottom: 60px;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled(motion.h2)`
  color: #FFFFFF;
  font-size: 96px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 40px;
  margin-left: 55px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  text-align: left;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ServiceItem = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 500px 1fr;
  text-align: left;
  cursor: pointer;
  background: #1E1E1E;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 450px;
    grid-template-columns: 450px 1fr;
  }

  @media (max-width: 768px) {
    height: 400px;
    grid-template-columns: 1fr;
  }
`;

const ServiceImageContainer = styled(motion.div)`
  width: 500px;
  height: 500px;
  position: relative;
  overflow: hidden;
  grid-column: 1;
  
  @media (max-width: 1024px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.8) 100%);
    pointer-events: none;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${ServiceImageContainer}:hover & {
    transform: scale(1.02);
  }
`;

const ServiceContent = styled(motion.div)`
  position: absolute;
  left: 350px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  @media (max-width: 1024px) {
    left: 300px;
  }

  @media (max-width: 768px) {
    left: 30px;
    padding-right: 30px;
  }
`;

const ServiceTitle = styled.h3`
  color: #FFFFFF;
  font-size: 82px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  line-height: 0.9;
  white-space: pre-line;
  letter-spacing: -1px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    font-size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const ServiceDescription = styled.p`
  color: #FFFFFF;
  font-size: 20px;
  line-height: 1.4;
  opacity: 0.9;
  font-family: 'Syne', sans-serif;
  max-width: 600px;
  position: absolute;
  left: 550px;
  bottom: 0;
  transform: none;
  padding-bottom: 0;

  @media (max-width: 1024px) {
    left: 500px;
    max-width: 450px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    bottom: auto;
    margin-top: 20px;
    max-width: 400px;
    font-size: 16px;
  }
`;

const ServiceItemComponent: React.FC<{
  service: {
    title: string;
    description: string;
    image: string;
    onClick?: () => void;
  };
}> = ({ service }) => {
  return (
    <ServiceItem 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <ServiceImageContainer onClick={service.onClick}>
        <ServiceImage src={service.image} alt={service.title} />
      </ServiceImageContainer>
      <ServiceContent>
        <ServiceTitle>{service.title}</ServiceTitle>
      </ServiceContent>
      <ServiceDescription>{service.description}</ServiceDescription>
    </ServiceItem>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'BRANDING',
      description: 'We create strong visual identities through logo design, brand strategy, and storytelling. From name to look and feel, we make sure your brand stands out and stays consistent everywhere.',
      image: brandingImage
    },
    {
      title: 'VIDEO &\nPRODUCTION',
      description: 'We bring your ideas to life through sharp, engaging visuals. From concept to final cut, we handle video editing, motion graphics, and production - tailored to fit your brand and captivate your audience.',
      image: videoProductionImage
    },
    {
      title: 'BUSINESS\nEVENT\nHOSTING',
      description: 'We handle all aspects of event management, from logistics to coordination, ensuring a seamless, professional experience that meets your business objectives and engages attendees.',
      image: businessEventImage,
      onClick: () => {
        window.open('/images/services/Event Hosting Bold.pdf', '_blank');
      }
    },
    {
      title: 'MOTION\nDESIGN',
      description: 'We create dynamic motion graphics that bring your brand to life. From animated logos to explainer videos, we craft engaging content that captures attention and communicates clearly.',
      image: motionDesignImage
    },
    {
      title: 'DIGITAL\nMARKETING',
      description: 'We develop targeted digital marketing strategies that drive engagement and growth. From social media campaigns to SEO and paid ads, we help you reach your audience and achieve measurable results.',
      image: digitalMarketingImage
    },
    {
      title: 'WEB DESIGN &\nDEVELOPMENT',
      description: 'We create responsive, user-friendly websites with stunning designs and seamless functionality, ensuring an optimal user experience that aligns with your brand\'s goals.',
      image: webDesignImage
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitleContainer>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHAT WE<br />OFFER
          </Title>
        </SectionTitleContainer>
        <ServicesList>
          {services.map((service, index) => (
            <ServiceItemComponent
              key={index}
              service={service}
            />
          ))}
        </ServicesList>
      </Container>
    </ServicesSection>
  );
};

export default Services; 