import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TeamSection = styled.section`
  background: #1E1E1E;
  padding: 180px 0;
  
  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  color: #FFFFFF;
  font-size: 95px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  margin-bottom: 100px;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -2px;
  
  @media (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  
  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const TeamMember = styled(motion.div)`
  display: flex;
  gap: 60px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

interface MemberImageProps {
  isRed?: boolean;
}

const MemberImage = styled.div<MemberImageProps>`
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  overflow: hidden;
  background: ${props => props.isRed ? '#E01212' : 'transparent'};
  cursor: pointer;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }
`;

const MemberInfo = styled.div`
  color: #FFFFFF;
  flex: 1;
  padding-top: 30px;
  
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const MemberName = styled.h3`
  font-size: 44px;
  font-weight: 600;
  font-family: 'Syne', sans-serif;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const MemberRole = styled.p`
  font-size: 26px;
  opacity: 0.8;
  font-family: 'Hando', sans-serif;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const MemberDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  opacity: 0.7;
  font-family: 'Hando', sans-serif;
  margin-bottom: 25px;
  max-width: 570px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
    max-width: 100%;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #FFFFFF;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  width: 28px;
  height: 28px;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

const Signature = styled.img`
  height: 70px;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Buna Pula',
      role: 'Founder & Creative Director',
      description: 'Founder of Bold Kreativ LLC, Buna leads with a passion for bold design and impactful storytelling. She drives the creative vision, crafting visuals and experiences that leave a lasting impression. Every project is a blend of creativity and strategy, designed to make a statement.',
      image: require('../../images/bunasquare.png'),
      signature: require('../../images/bunasignature.png'),
      linkedin: 'https://www.linkedin.com/in/buna-pula-7aa245199/',
      instagram: 'https://behance.net/bunapula'
    },
    {
      name: 'Shuki Dema',
      role: 'Chief Revenue Officer',
      image: require('../../images/shuki.png'),
      description: 'With extensive experience in business events, Shuki connects senior executives and C-level leaders to network, collaborate, and solve challenges. From summits to virtual roundtables, he designs tailored experiences that exceed expectations and align with client goals.',
      signature: require('../../images/shukisignature.png'),
      linkedin: 'https://www.linkedin.com/in/shuki-dema/'
    },
    {
      name: 'Blinera Orana',
      role: 'Partnership & Growth Manager',
      description: 'Blinera is the link between Bold Kreativ and the people who need us. With her influencer presence and deep network, she brings in the right clients and helps us grow loud and smart. She\'s all about building real connections, unlocking opportunities, and keeping the vibe bold.',
      image: require('../../images/blinera.png'),
      signature: require('../../images/blinerasignature.png'),
      linkedin: 'https://www.linkedin.com/in/blinera-orana/'
    }
  ];

  return (
    <TeamSection id="team">
      <Container>
        <Title>FOUNDING<br />TEAM</Title>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <MemberImage isRed={!member.image}>
                {member.image && <img src={member.image} alt={member.name} />}
              </MemberImage>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberDescription>{member.description}</MemberDescription>
                <BottomRow>
                  <SocialLinks>
                    <SocialLink href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </SocialLink>
                    {member.instagram && (
                      <SocialLink href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                        </svg>
                      </SocialLink>
                    )}
                  </SocialLinks>
                  <Signature src={member.signature} alt={`${member.name}'s signature`} />
                </BottomRow>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
};

export default Team; 