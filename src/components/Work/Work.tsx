import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const WorkSection = styled.div`
  padding: 100px 120px;
  background: #1E1E1E;
  overflow-x: hidden;
  text-align: center;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  margin-top: 80px;
  max-width: 2200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    gap: 40px;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: #2A2A2A;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 24/9;
  height: 450px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    .project-image {
      transform: scale(1.05);
    }
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
`;

const ProjectInfo = styled.div`
  color: #FFFFFF;
  transform: translateY(20px);
  transition: transform 0.3s ease;
`;

const ProjectTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #C9C9C9;
  margin-bottom: 20px;
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

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with seamless user experience",
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Analytics and management platform for social media",
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application",
    image: "/images/project3.jpg"
  },
  {
    id: 4,
    title: "AI-Powered Analytics",
    description: "Advanced data analytics platform with machine learning capabilities",
    image: "/images/project4.jpg"
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Work: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <WorkSection>
      <SectionTitle>Our Work</SectionTitle>
      <ProjectDescription>
        Exploring the intersection of technology and creativity
      </ProjectDescription>
      <WorkGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectImage src={project.image} alt={project.title} className="project-image" />
            <ProjectOverlay className="project-overlay">
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </WorkGrid>
    </WorkSection>
  );
};

export default Work; 