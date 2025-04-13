import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HowWeWorkSection = styled.section`
  padding: 100px 20px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 2000px;
  padding: 0 20px;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Hando', sans-serif;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000000;
`;

const WorkStepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const WorkStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background: #000000;
  border-radius: 4px;
`;

const StepNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #E01212;
  margin-bottom: 20px;
  font-family: 'Hando', sans-serif;
`;

const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 16px;
  font-family: 'Hando', sans-serif;
`;

const StepDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Hando', sans-serif;
`;

const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, target audience, and project requirements through in-depth consultation.'
    },
    {
      number: '02',
      title: 'Strategy & Design',
      description: 'Our team develops a comprehensive strategy and creates stunning designs that align with your brand vision.'
    },
    {
      number: '03',
      title: 'Execute & Deliver',
      description: 'We bring your project to life with precision and attention to detail, ensuring exceptional results.'
    }
  ];

  return (
    <HowWeWorkSection id="how-we-work">
      <SectionTitleContainer>
        <SectionTitle>How We Work</SectionTitle>
        <TitleLine />
      </SectionTitleContainer>
      <WorkStepsContainer>
        {steps.map((step, index) => (
          <WorkStep
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </WorkStep>
        ))}
      </WorkStepsContainer>
    </HowWeWorkSection>
  );
};

export default HowWeWork; 