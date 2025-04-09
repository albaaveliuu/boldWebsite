import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import thumbnail01 from '../../images/thumbnail01.png';
import thumbnail02 from '../../images/thumbnail02.png';
import thumbnail03 from '../../images/thumbnail03.png';
import thumbnail04 from '../../images/thumbnail04.png';
import thumbnail05 from '../../images/thumbnail05.png';
import thumbnail06 from '../../images/thumbnail06.png';

const WorkSection = styled.section`
  padding: 100px 20px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 2000px;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

const TitleLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000000;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  max-width: 2000px;
  width: 100%;
  margin-top: 60px;
`;

const Project = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  max-width: 800px;
  background: #1E1E1E;
  cursor: pointer;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const ProjectTitleContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  color: #000000;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Work: React.FC = () => {
  const navigate = useNavigate();
  const [titleWidths, setTitleWidths] = React.useState<{ [key: string]: number }>({});
  const titleRefs = React.useRef<{ [key: string]: HTMLHeadingElement }>({});

  React.useEffect(() => {
    const newTitleWidths: { [key: string]: number } = {};
    Object.keys(titleRefs.current).forEach(key => {
      if (titleRefs.current[key]) {
        newTitleWidths[key] = titleRefs.current[key].offsetWidth;
      }
    });
    setTitleWidths(newTitleWidths);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Brand Identity",
      description: "Creating a unique and memorable brand identity for a tech startup",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Web Design",
      description: "Designing a modern and responsive website for a fashion brand",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <WorkSection id="work">
      <SectionTitleContainer>
        <SectionTitle>Work</SectionTitle>
        <TitleLine />
      </SectionTitleContainer>
      <ProjectsGrid>
        <ProjectContainer>
          <Project
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={thumbnail01} alt="Project 1" />
          </Project>
          <ProjectTitleContainer>
            <ProjectTitle>Print Design</ProjectTitle>
            <TitleLine />
          </ProjectTitleContainer>
        </ProjectContainer>

        <ProjectContainer>
          <Project
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={thumbnail02} alt="Project 2" />
          </Project>
          <ProjectTitleContainer>
            <ProjectTitle>Event Design</ProjectTitle>
            <TitleLine />
          </ProjectTitleContainer>
        </ProjectContainer>

        <ProjectContainer>
          <Project
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={thumbnail03} alt="Project 3" />
          </Project>
          <ProjectTitleContainer>
            <ProjectTitle>Motion & Animation</ProjectTitle>
            <TitleLine />
          </ProjectTitleContainer>
        </ProjectContainer>

        <ProjectContainer>
          <Project
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={thumbnail04} alt="Project 4" />
          </Project>
          <ProjectTitleContainer>
            <ProjectTitle>Brand Strategy</ProjectTitle>
            <TitleLine />
          </ProjectTitleContainer>
        </ProjectContainer>

        <ProjectContainer>
          <Project
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={thumbnail05} alt="Project 5" />
          </Project>
          <ProjectTitleContainer>
            <ProjectTitle>Sustainable Design Principles</ProjectTitle>
            <TitleLine />
          </ProjectTitleContainer>
        </ProjectContainer>

        <ProjectContainer>
          <Project
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectImage src={thumbnail06} alt="Project 6" />
          </Project>
          <ProjectTitleContainer>
            <ProjectTitle>Social Media Design</ProjectTitle>
            <TitleLine />
          </ProjectTitleContainer>
        </ProjectContainer>
      </ProjectsGrid>
    </WorkSection>
  );
};

export default Work; 