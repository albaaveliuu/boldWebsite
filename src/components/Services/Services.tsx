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
  padding: 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: left;
`;

const Title = styled(motion.h2)`
  color: #FFFFFF;
  font-size: 96px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 40px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  text-align: left;
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

const ServiceItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  cursor: pointer;
`;

const ServiceImageContainer = styled(motion.div)`
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.8) 100%);
    pointer-events: none;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
  transition: transform 0.6s ease;

  ${ServiceImageContainer}:hover & {
    transform: scale(1.02);
  }
`;

const ServiceContent = styled(motion.div)`
  text-align: center;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  z-index: 2;
`;

const ServiceTitle = styled.h3`
  color: #FFFFFF;
  font-size: 64px;
  font-weight: 700;
  font-family: 'Syncopate', sans-serif;
  margin-bottom: 30px;
  text-transform: uppercase;
  line-height: 1.2;
`;

const ServiceDescription = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  line-height: 1.8;
  opacity: 0.8;
  font-family: 'Syncopate', sans-serif;
`;

const ServiceItemComponent: React.FC<{
  service: {
    title: string;
    description: string;
    image: string;
    onClick?: () => void;
  };
  isActive: boolean;
  index: number;
}> = ({ service, isActive, index }) => {
  return (
    <ServiceItem 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.8,
        zIndex: isActive ? 1 : 0
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ServiceImageContainer onClick={service.onClick}>
        <ServiceImage src={service.image} alt={service.title} />
      </ServiceImageContainer>
      <ServiceContent>
        <ServiceTitle>{service.title}</ServiceTitle>
        <ServiceDescription>{service.description}</ServiceDescription>
      </ServiceContent>
    </ServiceItem>
  );
};

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const services = [
    {
      title: 'BRANDING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: brandingImage
    },
    {
      title: 'VIDEO &\nPRODUCTION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: videoProductionImage
    },
    {
      title: 'BUSINESS\nEVENT\nHOSTING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: businessEventImage,
      onClick: () => {
        window.open('/images/services/Event Hosting Bold.pdf', '_blank');
      }
    },
    {
      title: 'MOTION\nDESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: motionDesignImage
    },
    {
      title: 'DIGITAL\nMARKETING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: digitalMarketingImage
    },
    {
      title: 'WEB DESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: webDesignImage
    }
  ];

  // Check if the section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Change active service based on scroll position
  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionTop = containerRef.current?.offsetTop || 0;
      const sectionHeight = containerRef.current?.offsetHeight || 0;
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the section we've scrolled (0 to 1)
      const scrollProgress = Math.min(
        Math.max((scrollPosition - sectionTop) / (sectionHeight - windowHeight), 0),
        1
      );
      
      // Calculate which service should be active based on scroll progress
      const newIndex = Math.min(
        Math.floor(scrollProgress * services.length),
        services.length - 1
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, services.length]);

  return (
    <LazyMotion features={domAnimation}>
      <ServicesSection ref={containerRef} id="services">
        <Container>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHAT WE<br />OFFER
          </Title>
          <ServicesList>
            {services.map((service, index) => (
              <ServiceItemComponent
                key={index}
                service={service}
                isActive={index === activeIndex}
                index={index}
              />
            ))}
          </ServicesList>
        </Container>
      </ServicesSection>
    </LazyMotion>
  );
};

export default Services; 