import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, domAnimation, LazyMotion, AnimatePresence } from 'framer-motion';

const ContactSection = styled(motion.div)`
  padding: 100px 120px;
  background: #1E1E1E;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #E01212, #FF4444);
  opacity: 0.1;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 3.5rem;
  color: #E01212;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 800;
  font-family: 'Syne', sans-serif;
`;

const ContactSubtitle = styled(motion.p)`
  color: #C9C9C9;
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  perspective: 1000px;
`;

const InputGroup = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1.2rem;
  background: #2A2A2A;
  border: 2px solid transparent;
  border-radius: 12px;
  color: #EEEEEE;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #E01212;
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(224, 18, 18, 0.2);
  }

  &::placeholder {
    color: #666666;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1.2rem;
  background: #2A2A2A;
  border: 2px solid transparent;
  border-radius: 12px;
  color: #EEEEEE;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #E01212;
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(224, 18, 18, 0.2);
  }

  &::placeholder {
    color: #666666;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #E01212;
  color: #EEEEEE;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(224, 18, 18, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: #EEEEEE;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 2rem;
  box-shadow: 0 8px 16px rgba(76, 175, 80, 0.3);
`;

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20, rotateX: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const successVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <ContactSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <FloatingShape
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <FloatingShape
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '60%', right: '10%' }}
        />

        <ContactContainer>
          <ContactTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Create Together
          </ContactTitle>
          
          <ContactSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind? We'd love to hear about it. Drop us a message and let's make something extraordinary.
          </ContactSubtitle>

          <Form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <InputGroup variants={inputVariants}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, y: -4 }}
              />
            </InputGroup>

            <InputGroup variants={inputVariants}>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, y: -4 }}
              />
            </InputGroup>

            <InputGroup variants={inputVariants}>
              <TextArea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02, y: -4 }}
              />
            </InputGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95, y: 0 }}
            >
              Send Message
            </SubmitButton>
          </Form>

          {isSubmitted && (
            <SuccessMessage
              initial="hidden"
              animate="visible"
              variants={successVariants}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
              >
                Message Sent Successfully! 🎉
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out. We'll get back to you soon with something amazing!
              </motion.p>
            </SuccessMessage>
          )}
        </ContactContainer>
      </ContactSection>
    </LazyMotion>
  );
};

export default Contact; 