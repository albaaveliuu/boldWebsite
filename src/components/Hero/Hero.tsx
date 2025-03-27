import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation, useScroll } from 'framer-motion';
import boldLogoRed from '../../images/boldLogoRed.svg';
import slogan from '../../images/Slogan.svg';

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  background: #1E1E1E;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  width: 35vw;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const MainLogo = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(224, 18, 18, 0.3));
  transform-style: preserve-3d;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const SloganLogo = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  filter: drop-shadow(0 0 30px rgba(224, 18, 18, 0.3));
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LogoWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    ${MainLogo} {
      opacity: 0.3;
    }
    ${SloganLogo} {
      opacity: 1;
    }
  }
`;

const LogoGlow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(224, 18, 18, 0.2) 0%, rgba(30, 30, 30, 0) 70%);
  pointer-events: none;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #E01212;
  border-radius: 50%;
  filter: blur(1px);
`;

const Subtitle = styled(motion.p)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  color: #E01212;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin-top: 400px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    max-width: 90%;
    margin-top: 300px;
  }
`;

const ScrollButton = styled(motion.button)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Arrow = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-right: 3px solid #E01212;
  border-bottom: 3px solid #E01212;
  transform: rotate(45deg);
  opacity: 0.3;
  margin: -8px 0;

  &:nth-child(1) {
    animation: fadeArrow 1.5s infinite;
  }
  &:nth-child(2) {
    animation: fadeArrow 1.5s infinite 0.2s;
  }
  &:nth-child(3) {
    animation: fadeArrow 1.5s infinite 0.4s;
  }

  @keyframes fadeArrow {
    0% {
      opacity: 0.3;
      transform: rotate(45deg) translateY(0);
    }
    50% {
      opacity: 1;
      transform: rotate(45deg) translateY(10px);
    }
    100% {
      opacity: 0.3;
      transform: rotate(45deg) translateY(0);
    }
  }
`;

const createParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 2 + 2
  }));
};

const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const particles = createParticles(20);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        scale: 1,
        rotateY: 360,
        transition: {
          duration: 2,
          ease: "easeOut"
        }
      });

      controls.start({
        rotateY: [0, 10, -10, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      });
    };

    startAnimation();
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScroll(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <LogoContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LogoGlow
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <LogoWrapper
          whileHover={{
            scale: 1.02,
            filter: "drop-shadow(0 0 50px rgba(224, 18, 18, 0.5))",
            transition: { 
              duration: 0.6,
              ease: "easeInOut"
            }
          }}
        >
          <MainLogo
            src={boldLogoRed}
            alt="Bold"
            initial={{ scale: 0.8, rotateY: 0 }}
            animate={controls}
          />
          <SloganLogo
            src={slogan}
            alt="Bold Slogan"
            initial={{ scale: 0.8, rotateY: 0 }}
            animate={controls}
          />
        </LogoWrapper>

        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, particle.x],
              y: [0, particle.y],
              opacity: [0, 1, 0],
              scale: [1, particle.scale, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </LogoContainer>

      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Let's Create Together
      </Subtitle>
      
      <ScrollButton
        onClick={scrollToWork}
        animate={{
          opacity: showScroll ? 1 : 0,
          y: showScroll ? 0 : 20
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <Arrow />
        <Arrow />
        <Arrow />
      </ScrollButton>
    </HeroSection>
  );
};

export default Hero; 