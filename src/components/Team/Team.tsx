import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TeamSection = styled.section`
  background: #1E1E1E;
  padding: 100px 0;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 60px;
  color: #FFFFFF;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Hando', sans-serif;
`;



const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
  border: 2px solid #E01212;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(224, 18, 18, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:after {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const MemberName = styled.h3`
  color: #FFFFFF;
  font-size: 24px;
  font-family: 'Hando', sans-serif;
  margin-bottom: 10px;
`;

const MemberRole = styled.p`
  color: #E01212;
  font-size: 16px;
  font-family: 'Hando', sans-serif;
  text-transform: uppercase;
`;

const RedDot = styled.span`
  color: #E01212;
  font-size: 32px;
  margin-left: 5px;
`;

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Creative Director',
      image: '/images/team/member1.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: '/images/team/member2.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Developer',
      image: '/images/team/member3.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing',
      image: '/images/team/member4.jpg'
    }
  ];

  return (
    <TeamSection id="team">
      <Container>
        <SectionTitleContainer>
          <SectionTitle>TEAM</SectionTitle>
        </SectionTitleContainer>
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