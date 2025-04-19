import React, { useEffect, useState } from 'react';
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

const HeroText = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
  
  h1 {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  p {
    font-size: 20px;
    opacity: 0.8;
    
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
  background: #1E1E1E;
  overflow: hidden;
`;

const BackgroundSlogan = styled(motion.img)`
  position: absolute;
  width: 40%;
  height: 40%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.15;
`;

const SloganText = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
`;

const SloganDescription = styled(motion.p)`
  font-size: 28px;
  color:rgb(255, 255, 255);
  line-height: 1.6;
  margin: 0 auto;
`;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState<boolean>(true);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 500);
    
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
      opacity: 0.15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    fadeOut: {
      opacity: 0.15,
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

  return (
    <>
      <HeroSection>
        <HeroImageContainer>
          {headerImages.map((image, index) => (
            <HeroImage
              key={index}
              src={image}
              alt={`Digital Studio Hero ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                transition: { duration: 0.4 }
              }}
            />
          ))}
        </HeroImageContainer>
       
      </HeroSection>
      <SloganSection>
        <BackgroundSlogan
          src={Slogan}
          alt="Bold Slogan"
          variants={sloganVariants}
          initial="hidden"
          animate={["visible", "fadeOut"]}
          viewport={{ once: true }}
        />
        <SloganText>
          
          <SloganDescription
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
             Design makes a statement.<br />
            We turn concepts into visuals that demand attention,
            <br />
            spark action, and make you IMPOSSIBLE TO IGNORE.
          </SloganDescription>
        </SloganText>
      </SloganSection>
      <NewsletterPopup onClose={handleCloseNewsletter} isVisible={showNewsletter} />
    </>
  );
};

export default Hero; 