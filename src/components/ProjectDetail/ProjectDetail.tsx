import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProjectDetailContainer = styled.div`
  padding: 120px 120px 80px;
  min-height: 100vh;
  background: #1E1E1E;

  @media (max-width: 768px) {
    padding: 100px 20px 60px;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 40px;
`;

const ProjectTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  color: #FFFFFF;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #C9C9C9;
  margin-bottom: 40px;
  max-width: 800px;
`;

const ProjectMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const MetaItem = styled.div`
  h3 {
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #C9C9C9;
  }
`;

const projects = {
  '1': {
    title: "E-commerce Platform",
    description: "A comprehensive e-commerce solution built with modern technologies. This platform offers a seamless shopping experience with features like real-time inventory management, secure payment processing, and personalized recommendations. The design focuses on user experience while maintaining high performance and scalability.",
    image: "/images/project1.jpg",
    client: "RetailTech Inc.",
    duration: "6 months",
    technologies: "React, Node.js, MongoDB"
  },
  '2': {
    title: "Social Media Dashboard",
    description: "An intuitive analytics and management platform for social media professionals. This dashboard provides real-time insights, scheduling capabilities, and engagement metrics across multiple social media platforms. The interface is designed for efficiency and ease of use, helping social media managers make data-driven decisions.",
    image: "/images/project2.jpg",
    client: "SocialPro Agency",
    duration: "4 months",
    technologies: "Vue.js, Python, PostgreSQL"
  },
  '3': {
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile banking application that revolutionizes the way users manage their finances. The app includes features like instant transfers, bill payments, and investment tracking. Security was a top priority, implementing state-of-the-art encryption and biometric authentication.",
    image: "/images/project3.jpg",
    client: "FinTech Solutions",
    duration: "8 months",
    technologies: "React Native, Firebase"
  }
} as const;

type Project = {
  title: string;
  description: string;
  image: string;
  client: string;
  duration: string;
  technologies: string;
};

type ProjectId = keyof typeof projects;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id && projects[id as ProjectId];

  if (!project) {
    return (
      <ProjectDetailContainer>
        <BackButton onClick={() => navigate('/')}>← Back to Projects</BackButton>
        <ProjectTitle>Project not found</ProjectTitle>
      </ProjectDetailContainer>
    );
  }

  return (
    <ProjectDetailContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BackButton onClick={() => navigate('/')}>← Back to Projects</BackButton>
        <ProjectImage src={project.image} alt={project.title} />
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectMeta>
          <MetaItem>
            <h3>Client</h3>
            <p>{project.client}</p>
          </MetaItem>
          <MetaItem>
            <h3>Duration</h3>
            <p>{project.duration}</p>
          </MetaItem>
          <MetaItem>
            <h3>Technologies</h3>
            <p>{project.technologies}</p>
          </MetaItem>
        </ProjectMeta>
      </motion.div>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail; 