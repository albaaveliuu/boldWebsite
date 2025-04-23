import React from 'react';
import styled from '@emotion/styled';

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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
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

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 95px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 100px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  margin-left: 40px;
  
  @media (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 60px;
    margin-left: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0 20px;
    gap: 40px;
    width: 100%;
  }
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 500px minmax(700px, 1fr);
  text-align: left;
  background: #1E1E1E;
  overflow: hidden;
  max-width: 1400px;

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px;
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center;
  }
`;

const ServiceImageContainer = styled.div`
  width: 500px;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  position: relative;
  padding: 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: -140px;
  height: 100%;
  padding-bottom: 20px;
  padding-top: 40px;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    justify-content: flex-start;
    padding-bottom: 20px;
    padding-top: 20px;
    height: auto;
    align-items: center;
  }
`;

const ServiceTitle = styled.h3`
  color: #FFFFFF;
  font-size: 85px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  line-height: 0.9;
  white-space: pre-line;
  letter-spacing: -1px;
  margin-bottom: 45px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 15px;
    line-height: 1;
    margin-top: 0;
    text-align: center;
  }
`;

const ServiceDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 16px;
  max-width: 700px;
  padding-left: 120px;
  padding-right: 40px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
`;

const DownloadLink = styled.a`
  color: #FFFFFF;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 5px;
  font-size: 16px;
  padding-bottom: 2px;
  
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

interface Service {
  title: string | string[];
  description: string;
  image: string;
  pdfLink?: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "BRANDING",
      description: "We create strong visual identities through logo design, brand strategy, and storytelling. From name to look and feel, we make sure your brand stands out and stays consistent everywhere.",
      image: brandingImage
    },
    {
      title: ["VIDEO", "PRODUCTION"],
      description: "We bring your ideas to life through sharp, engaging visuals. From concept to final cut, we handle video editing, motion graphics, and production - tailored to fit your brand and captivate your audience.",
      image: videoProductionImage
    },
    {
      title: ["BUSINESS", "EVENT", "HOSTING"],
      description: "We handle all aspects of event management, from logistics to coordination, ensuring a seamless, professional experience that meets your business objectives and engages attendees.",
      image: businessEventImage,
      pdfLink: require('../../images/services/Event Hosting Bold.pdf')
    },
    {
      title: ["MOTION", "DESIGN"],
      description: "We create dynamic motion graphics that bring your brand to life. From animated logos to explainer videos, we craft engaging content that captures attention and communicates clearly.",
      image: motionDesignImage
    },
    {
      title: ["DIGITAL", "MARKETING"],
      description: "We develop targeted digital marketing strategies that drive engagement and growth. From social media campaigns to SEO and paid ads, we help you reach your audience and achieve measurable results.",
      image: digitalMarketingImage
    },
    {
      title: ["WEB", "DESIGN"],
      description: "We create responsive, user-friendly websites with stunning designs and seamless functionality, ensuring an optimal user experience that aligns with your brand's goals.",
      image: webDesignImage
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <Title>
          WHAT WE<br />OFFER
        </Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceItem key={index}>
              <ServiceImageContainer>
                <ServiceImage 
                  src={service.image} 
                  alt={typeof service.title === 'string' ? service.title : service.title.join(' ')} 
                />
              </ServiceImageContainer>
              <ServiceContent>
                <ServiceTitle>
                  {Array.isArray(service.title) 
                    ? service.title.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < service.title.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : service.title}
                </ServiceTitle>
                <ServiceDescription>
                  {service.description}
                  {service.pdfLink && (
                    <>
                      <br />
                      <DownloadLink href={service.pdfLink} download="Event Hosting Bold.pdf">
                        Download File Here
                      </DownloadLink>
                    </>
                  )}
                </ServiceDescription>
              </ServiceContent>
            </ServiceItem>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;