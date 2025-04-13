import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServicesSection = styled.section`
  height: 400vh;
  background: #1E1E1E;
  position: relative;
`;

const StickyContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  perspective: 1000px;
`;

const StageTitle = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 10%;
  transform: none;
  font-size: 100px;
  font-weight: 700;
  color: #FFFFFF;
  text-align: left;
  line-height: 1.2;
  z-index: 100;
  font-family: 'Hando', sans-serif;
  max-width: 600px;
`;

const StageItem = styled(motion.div)<{ $index: number }>`
  position: absolute;
  top: 35%;
  left: ${props => props.$index === 0 ? '20%' : '50%'};
  transform: translate(-50%, -50%);
  width: 800px;
  height: 900px;
  background: #1E1E1E;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #FFFFFF;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  cursor: pointer;
  z-index: ${props => props.$index === 0 ? 10 : 1};

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 20;
  }
`;

const StageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  padding: 20px;
`;

const WorkItemBlock = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  background: rgba(0, 0, 0, 0.9);
  padding: 30px;
  border-radius: 8px;
`;

const WorkItemLabel = styled.div`
  font-size: 18px;
  color: #E01212;
  margin-bottom: 12px;
  font-family: 'Hando', sans-serif;
`;

const WorkItemTitle = styled.div`
  font-size: 32px;
  color: #FFFFFF;
  margin-bottom: 12px;
  font-family: 'Hando', sans-serif;
`;

const WorkItemText = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Hando', sans-serif;
`;

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const items = [
    {
      number: '01',
      title: 'Branding',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: '/images/services/mockupone.png'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Planning the execution.',
      image: 'https://cdn.prod.website-files.com/67bc2f8ecd09af04ab7c4682/67beb7ea5de595b80a6117bc_Mask%20group%20(4).png'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating the visuals.',
      image: 'https://cdn.prod.website-files.com/67bc2f8ecd09af04ab7c4682/67beb77f03cc2e28c43d64f7_Mask%20group%20(5).png'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Bringing it to life.',
      image: 'https://cdn.prod.website-files.com/67bc2f8ecd09af04ab7c4682/67beb76b4c2c267d9f123b3f_Mask%20group%20(6).png'
    }
  ];

  const stageRotation = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const stageZ = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Create transforms for each item outside the map function
  const itemScales = items.map((_, index) => 
    useTransform(scrollYProgress, 
      [index * 0.25, (index + 1) * 0.25], 
      [0.8, 1]
    )
  );

  const itemOpacities = items.map((_, index) => 
    useTransform(scrollYProgress,
      [index * 0.25, (index + 1) * 0.25],
      [0, 1]
    )
  );

  return (
    <ServicesSection ref={containerRef} id="services">
      <StickyContainer>
        <Stage
          style={{
            rotateX: stageRotation,
            z: stageZ,
            transformStyle: 'preserve-3d'
          }}
        >
          <StageTitle
            style={{
              opacity: titleOpacity
            }}
          >
           WHAT WE <br />OFFER
          </StageTitle>
          {items.map((item, index) => (
            <StageItem
              key={index}
              $index={index}
              initial={{ x: index === 0 ? -100 : -1000, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }
              }}
              style={{
                scale: itemScales[index],
                opacity: itemOpacities[index]
              }}
            >
              <StageImage src={item.image} alt={item.title} />
              <WorkItemBlock>
                <WorkItemLabel>{item.number}</WorkItemLabel>
                <WorkItemTitle>{item.title}</WorkItemTitle>
                <WorkItemText>{item.description}</WorkItemText>
              </WorkItemBlock>
            </StageItem>
          ))}
        </Stage>
      </StickyContainer>
    </ServicesSection>
  );
};

export default Services; 