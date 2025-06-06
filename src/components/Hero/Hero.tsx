import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useScroll } from 'framer-motion';
import Slogan from '../../images/Slogan.svg';

import { ReactComponent as ArrowDownIcon } from '../../images/ArrowDownIcon.svg';
import NewsletterPopup from '../Newsletter/NewsletterPopup';

// Import all header images
import headerImage1 from '../../images/header/Artboard 1.png';
import headerImage2 from '../../images/header/Artboard 2.png';
import headerImage3 from '../../images/header/Artboard 3.png';
import headerImage4 from '../../images/header/Artboard 4.png';
import headerImage5 from '../../images/header/Artboard 5.png';
import headerImage6 from '../../images/header/Artboard 6.png';
import headerImage7 from '../../images/header/Artboard 7.png';
import headerImage8 from '../../images/header/Artboard 8.png';
import headerImage9 from '../../images/header/Artboard 9.png';
import headerImage10 from '../../images/header/Artboard10.png';
import headerImage11 from '../../images/header/Artboard11.png';
import headerImage12 from '../../images/header/Artboard12.png';
import headerImage13 from '../../images/header/Artboard13.png';
import headerImage14 from '../../images/header/Artboard14.png';
import headerImage15 from '../../images/header/Artboard15.png';
import headerImage16 from '../../images/header/Artboard16.png';
import headerImage17 from '../../images/header/Artboard17.png';
import headerImage19 from '../../images/header/Artboard19.png';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
`;

const HeroText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 20px), -50%);
  z-index: 2;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin-bottom: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 769px) {
    transform: translate(calc(-50% + 20px), -50%);
  }
  
  h1 {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  p {
    font-size: 20px;
    opacity: 0.8;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #fff;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  position: absolute;
  bottom: 40px;
  z-index: 10;
  
  span {
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SloganSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -60px;
  background: #1E1E1E;
  overflow: hidden;
  padding: 0 40px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    margin: 40px 0;
  }
`;

const BackgroundSlogan = styled(motion.img)`
  position: absolute;
  width: 50%;
  height: 50%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.05;

  @media (max-width: 768px) {
    width: 250%;
    opacity: 0.03;
  }
`;

const SloganText = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
    text-align: center;
    align-items: center;
  }
`;

const Word = styled(motion.span)`
  font-size: 27px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.2;
  display: inline-block;
  font-weight: 400;
  font-family: 'Syne', sans-serif;
  opacity: 0;
  transform: translateY(20px);

  &.bold {
    font-weight: 700;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin-right: 2px;

    &.bold {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;

    &.bold {
      font-size: 12px;
    }
  }
`;

const TextLine = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  color: #FFFFFF;
  font-family: 'Syne', sans-serif;

  &:first-of-type {
    margin-bottom: 0;
    
    ${Word} {
      font-size: 27px;
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 1;
    gap: 4px;
    margin-bottom: 2px;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;

const Letter = styled(motion.span)`
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  font-family: 'Syne', sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    transform: translateY(10px);
  }
`;

const SloganDescription = styled(motion.p)`
  font-size: 23px;
  color:rgb(255, 255, 255);
  line-height: 1.6;
  margin: 0 auto;
  opacity: 0;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const BackgroundImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

interface WordType {
  text: string;
  delay: number;
  highlight?: boolean;
}

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState<boolean>(true);
  const sloganRef = useRef<HTMLDivElement>(null);
  
  const headerImages = [
    headerImage1,
    headerImage2,
    headerImage3,
    headerImage4,
    headerImage5,
    headerImage6,
    headerImage7,
    headerImage8,
    headerImage9,
    headerImage10,
    headerImage11,
    headerImage12,
    headerImage13,
    headerImage14,
    headerImage15,
    headerImage16,
    headerImage17,
    headerImage19
  ];

  const { scrollYProgress } = useScroll({
    target: sloganRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setButtonVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseNewsletter = () => {
    setShowNewsletter(false);
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    enter: { opacity: 0 },
    center: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const sloganVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 0.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    fadeOut: {
      opacity: 0.05,
      transition: {
        duration: 0.3,
        delay: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8
      }
    }
  };

  const lineOne: WordType[] = [
    { text: "Design makes a statement.", delay: 0 }
  ];

  const lineTwo: WordType[] = [
    { text: "We", delay: 0.2 },
    { text: "turn", delay: 0.25 },
    { text: "concepts", delay: 0.3 },
    { text: "into", delay: 0.35 },
    { text: "visuals", delay: 0.4 },
    { text: "that", delay: 0.45 },
    { text: "demand", delay: 0.5 },
    { text: "attention,", delay: 0.55 }
  ];

  const lineThree: WordType[] = [
    { text: "spark", delay: 0.6 },
    { text: "action,", delay: 0.65 },
    { text: "and", delay: 0.7 },
    { text: "make", delay: 0.75 },
    { text: "you", delay: 0.8 },
    { text: "IMPOSSIBLE", delay: 0.85, highlight: true },
    { text: "TO", delay: 0.9, highlight: true },
    { text: "IGNORE.", delay: 0.95, highlight: true }
  ];

  const wordVariants = {
    hidden: { 
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  const renderAnimatedText = (text: string, delay: number) => {
    return text.split('').map((letter, i) => (
      <Letter
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </Letter>
    ));
  };

  return (
    <>
      <HeroSection>
        <HeroImageContainer>
          {headerImages.map((image, index) => (
            <HeroImage
              key={index}
              src={image}
              alt={`Digital Studio Hero ${index + 1}`}
              style={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'none'
              }}
            />
          ))}
        </HeroImageContainer>
      </HeroSection>
      <SloganSection>
        <BackgroundSlogan
          src={Slogan}
          alt="Background Slogan"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <SloganText>
          <TextLine>
            {lineOne.map((word, index) => (
              <Word
                key={index}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: word.delay }}
              >
                {word.text}
              </Word>
            ))}
          </TextLine>
          <TextLine>
            {lineTwo.map((word, index) => (
              <Word
                key={index}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: word.delay }}
              >
                {word.text}
              </Word>
            ))}
          </TextLine>
          <TextLine>
            {lineThree.map((word, index) => (
              <Word
                key={index}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: word.delay }}
                className={word.highlight ? 'bold' : ''}
              >
                {word.text}
              </Word>
            ))}
          </TextLine>
        </SloganText>
      </SloganSection>
      {/* @ts-ignore - isVisible prop is handled in the component */}
      <NewsletterPopup onClose={handleCloseNewsletter} isVisible={showNewsletter} />
    </>
  );
};

export default Hero; 