import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesContainer = styled(motion.div)`
  padding: 8rem 2rem;
  background: #1E1E1E;
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const IconContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E01212;
  position: sticky;
  top: 20%;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
  }
`;

const ServicesList = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ServiceItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`;

const ServiceNumber = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.3);
  min-width: 40px;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  color: #FFFFFF;
  margin: 0;
`;

const ServicesSection = styled.div`
  padding: 100px 120px;
  background: #1E1E1E;
  text-align: center;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 64px;
  margin-bottom: 24px;
  color: #E01212;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

const services = [
  {
    id: 1,
    title: "Development",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12l4.5 4.5" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12l-4.5 -4.5" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12l4.5 -4.5" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12l-4.5 4.5" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),
    color: "#E01212"
  },
  {
    id: 2,
    title: "Motion Graphic",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8h16M4 16h16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 4v16M16 4v16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "#FF6B6B"
  },
  {
    id: 3,
    title: "Video Editing",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10l5-5M19 5l-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 8h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 16h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "#4ECDC4"
  },
  {
    id: 4,
    title: "3D Animation",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke={color} strokeWidth="1.5"/>
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),
    color: "#FFD93D"
  },
  {
    id: 5,
    title: "Branding",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M3 7v14M21 7v14M6 7h12a3 3 0 0 0 3-3V3H3v1a3 3 0 0 0 3 3z" stroke={color} strokeWidth="1.5"/>
        <path d="M12 7v14" stroke={color} strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    ),
    color: "#6C5CE7"
  },
  {
    id: 6,
    title: "Web Design",
    icon: (color: string) => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18M12 3v18M12 12l7-7M12 12l-7 7" stroke={color} strokeWidth="1.5"/>
      </svg>
    ),
    color: "#00B894"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const iconVariants = {
  initial: { rotate: 0 },
  hover: { rotate: 180, scale: 1.1 },
};

const Services = () => {
  const [activeService, setActiveService] = useState(1);

  return (
    <ServicesSection>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <IconContainer
          initial="initial"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {services.find(s => s.id === activeService)?.icon(services.find(s => s.id === activeService)?.color || "#E01212")}
        </IconContainer>

        <ServicesList>
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              variants={itemVariants}
              onHoverStart={() => setActiveService(service.id)}
              whileHover={{
                x: 20,
                backgroundColor: `${service.color}15`,
                transition: { duration: 0.3 }
              }}
              style={{
                borderLeft: activeService === service.id ? `4px solid ${service.color}` : "none"
              }}
            >
              <ServiceNumber style={{ color: activeService === service.id ? service.color : undefined }}>
                {String(service.id).padStart(2, '0')}
              </ServiceNumber>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceItem>
          ))}
        </ServicesList>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services; 