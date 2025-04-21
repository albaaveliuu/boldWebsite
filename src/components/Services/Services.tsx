import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, m, LazyMotion, domAnimation } from 'framer-motion';

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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
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
    height: auto;
    min-height: 400px;
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
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
    position: relative;
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
    position: absolute;
    left: 30px;
    top: auto;
    bottom: 120px;
    transform: none;
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
    margin-top: 0;
  }
`;

const AnimatedTitle = styled(motion.span)`
  display: inline-block;
`;

const AnimatedDescription = styled(motion.p)`
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
    left: 30px;
    bottom: 30px;
    margin-top: 0;
    padding-right: 30px;
    max-width: calc(100% - 60px);
    font-size: 16px;
  }
`;

interface Service {
  title: string | string[];
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services: Service[] = [
    {
      title: "BRANDING",
      description: "We create strong visual identities through logo design, brand strategy, and storytelling. From name to look and feel, we make sure your brand stands out and stays consistent everywhere.",
      image: "/static/media/Branding.498dffa129e846c1595c.png"
    },
    {
      title: ["VIDEO", "PRODUCTION"],
      description: "We bring your ideas to life through sharp, engaging visuals. From concept to final cut, we handle video editing, motion graphics, and production - tailored to fit your brand and captivate your audience.",
      image: "/static/media/VideoAndProduction.cccb4cb423d0833a4dc3.png"
    },
    {
      title: ["BUSINESS", "EVENT", "HOSTING"],
      description: "We handle all aspects of event management, from logistics to coordination, ensuring a seamless, professional experience that meets your business objectives and engages attendees.",
      image: "/static/media/BusinessEventHosting.5466fcb245b4679cd102.png"
    },
    {
      title: ["MOTION", "DESIGN"],
      description: "We create dynamic motion graphics that bring your brand to life. From animated logos to explainer videos, we craft engaging content that captures attention and communicates clearly.",
      image: "/static/media/MotionDesign.f09e871e5e4805a2008d.png"
    },
    {
      title: ["DIGITAL", "MARKETING"],
      description: "We develop targeted digital marketing strategies that drive engagement and growth. From social media campaigns to SEO and paid ads, we help you reach your audience and achieve measurable results.",
      image: "/static/media/DigitalMarketing.217c18cb995f65eb2630.png"
    },
    {
      title: ["WEB DESIGN", "& DEVELOPMENT"],
      description: "We create responsive, user-friendly websites with stunning designs and seamless functionality, ensuring an optimal user experience that aligns with your brand's goals.",
      image: "/static/media/WebDesign.3577663009905919d19b.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentIndex];

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1 }
  };

  return (
    <ServicesSection>
      <ServicesList>
        <LazyMotion features={domAnimation}>
          <m.div style={{ position: 'relative' }}>
            <ServiceItem
              key={currentIndex}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              transition={{ 
                duration: 1,
                ease: "easeInOut" 
              }}
            >
              <ServiceImageContainer>
                <ServiceImage src={currentService.image} alt={typeof currentService.title === 'string' ? currentService.title : currentService.title.join(' ')} />
              </ServiceImageContainer>
              <ServiceContent>
                <ServiceTitle>
                  {Array.isArray(currentService.title) ? (
                    currentService.title.map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line.split('').map((char, charIndex) => (
                          <AnimatedTitle
                            key={`${lineIndex}-${charIndex}`}
                            custom={charIndex + (lineIndex * 20)}
                            variants={titleAnimation}
                            initial="hidden"
                            animate="visible"
                          >
                            {char}
                          </AnimatedTitle>
                        ))}
                        {lineIndex < currentService.title.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  ) : (
                    currentService.title.split('').map((char, index) => (
                      <AnimatedTitle
                        key={index}
                        custom={index}
                        variants={titleAnimation}
                        initial="hidden"
                        animate="visible"
                      >
                        {char}
                      </AnimatedTitle>
                    ))
                  )}
                </ServiceTitle>
              </ServiceContent>
              <AnimatedDescription
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: (Array.isArray(currentService.title) 
                    ? currentService.title.join('').length 
                    : currentService.title.length) * 0.05 + 0.2,
                  duration: 0.8
                }}
              >
                {currentService.description}
              </AnimatedDescription>
            </ServiceItem>
          </m.div>
        </LazyMotion>
      </ServicesList>
    </ServicesSection>
  );
};

export default Services; 