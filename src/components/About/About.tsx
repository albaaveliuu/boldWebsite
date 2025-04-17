import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background: #1E1E1E;
  padding: 180px 0;
  color: #FFFFFF;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 95px;
  font-weight: 700;
  font-family: 'Hando', sans-serif;
  margin-bottom: 40px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.8;
  opacity: 0.8;
  font-family: 'Hando', sans-serif;
  margin-bottom: 32px;
  max-width: 600px;

  &:last-of-type {
    margin-bottom: 60px;
  }
`;

const Slogan = styled.div`
  margin-top: 0;
  width: 100%;
  max-width: 400px;
  
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

  img {
    max-width: 100%;
    height: auto;
  }
`;

const About: React.FC = () => {
  const sloganImage = require('../../images/aboutus/Slogan.svg');

  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>ABOUT US</Title>
          <Description>
            Bold Kreativ LLC is a collective with roots in Kosovo and Berlin.
          </Description>
          <Description>
            We gather as a flexible, international team to craft bold design solutions and unforgettable event experiences.
          </Description>
          <Description>
            As a collaborative network of designers, strategists, and event specialists, we tailor each project to fit your unique needs. From concept to execution, we blend visual design, media, branding, and hosting into one cohesive, impactful experience.
          </Description>
          <Description>
            We value honesty, creativity, and connection. Every project is a partnership, and we approach each one with intention, curiosity, and a lot of heart.
          </Description>
          <Description>
            Let's just
          </Description>
          <Slogan>
            <motion.img 
              src={sloganImage}
              alt="Make it loud"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </Slogan>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={require('../../images/logo3d.png')} alt="3D Logo" />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About; 