import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 120px 20px;
  background: #FFFFFF;
  
  @media (max-width: 768px) {
    padding: 80px 16px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionHeader = styled.div`
  margin-bottom: 80px;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 2000px;
  padding: 0;
  margin: 0 auto 40px;
  
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TitleLine = styled.div`
  height: 1px;
  background: #000000;
  flex: 1;
`;

const Description = styled.p`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #FFFFFF;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 30px;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
  color: #E01212;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    margin-bottom: 24px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  color: #000000;
  margin-bottom: 16px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that engage your audience and drive results. We combine aesthetics with functionality.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16M4 4v16M4 4l16 16M20 4v16M20 20H4M20 20L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Brand Strategy",
      description: "Develop a strong brand identity that resonates with your target audience and sets you apart from competitors.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Motion Graphics",
      description: "Bring your brand to life with captivating animations and visual effects that tell your story.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 4v16M16 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that keep your customers coming back for more.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      description: "Drive growth with data-driven strategies across social media, SEO, and content marketing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Content Creation",
      description: "Produce engaging content that tells your story and connects with your audience across all platforms.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>
          <TitleContainer>
            <Title>SERVICES</Title>
            <TitleLine />
          </TitleContainer>
        </SectionHeader>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 