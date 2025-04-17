import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
// Import team member images
import BunaImage from '../../images/team/Buna.png';
import DioraImage from '../../images/team/Diora.png';
import RitaImage from '../../images/team/Rita.png';
import LumiImage from '../../images/team/Lumi.png';

const TeamSection = styled.section`
  background: #1E1E1E;
  padding: 0;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 96px;
  font-weight: 700;
  font-family: 'Syncopate', sans-serif;
  margin: 80px 0;
  text-transform: uppercase;
  padding: 0 20px;
  line-height: 1;
  letter-spacing: -2px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 40px 0;
`;

const TeamMember = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MemberImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 24px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Syncopate', sans-serif;
  margin-bottom: 8px;
`;

const MemberRole = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  opacity: 0.8;
  font-family: 'Syncopate', sans-serif;
`;

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Buna Pula',
      role: 'Managing Director & Brand Specialist',
      image: require('../../images/team/Buna.png')
    },
    {
      name: 'Diora Binxhiu',
      role: 'Social Media Specialist',
      image: require('../../images/team/Diora.png')
    },
    {
      name: 'Rita Spahiu',
      role: 'Talent Manager & Copywriter',
      image: require('../../images/team/Rita.png')
    },
    {
      name: 'Lumi Pula',
      role: 'Video Production & Animation',
      image: require('../../images/team/Lumi.png')
    }
  ];

  return (
    <TeamSection id="team">
      <Container>
        <Title>TEAM</Title>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MemberImage>
                <img src={member.image} alt={member.name} />
              </MemberImage>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </TeamMember>
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
};

export default Team; 