import React from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = styled.section`
  background: #1E1E1E;
  padding: 180px 0;
  color: #FFFFFF;
  
  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
    gap: 40px;
  }
`;

const Content = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 95px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 40px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  opacity: 0.8;
  font-family: 'Hando', sans-serif;
  margin-bottom: 20px;
  max-width: 450px;

  &:last-of-type {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
    max-width: 100%;
    
    &:last-of-type {
      margin-bottom: 15px;
    }
  }
`;

const LastDescription = styled(Description)`
  max-width: 460px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const BoldItalicText = styled.span`
  font-weight: 700;
  font-style: italic;
`;

const Slogan = styled.div`
  margin-top: 0;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(0) invert(1);
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 120px;
  perspective: 1000px;
  
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    transform-style: preserve-3d;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, 0]);

  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>ABOUT US</Title>
          <Description>
            <BoldItalicText>Bold Kreativ LLC</BoldItalicText> is a collective with roots in Kosovo and Berlin.
          </Description>
          <Description>
            We gather as a flexible, international team to craft bold design solutions and unforgettable event experiences.
          </Description>
          <LastDescription>
            As a collaborative network of designers, strategists, and event specialists, we tailor each project to fit your unique needs. From concept to execution, we blend visual design, media, branding, and hosting into one cohesive, impactful experience.
          </LastDescription>
        </Content>
        <ImageContainer>
          <motion.img 
            src={require('../../images/logo3d.png')} 
            alt="3D Logo"
            style={{
              scale,
              y,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About; 