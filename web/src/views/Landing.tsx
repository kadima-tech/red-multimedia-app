import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import bgImage from '../assets/hero-image.png';
import logo from '../assets/logo.svg';

import { HeaderSection, StyledSection } from '../components/Section';
import { Container } from '../components/Container';

import { Wrapper } from '../components/Wrapper';
import Logos from '../components/logoSection';
import MissionStatement from '../components/MissionStatement';
import ClientSection from '../components/ClientSection';
import Triangle from '../components/Triangle';

interface Props {
  isScrolled?: boolean;
  shouldAnimate?: boolean;
}

const widthAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 70%;
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const easeInOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

const StyledContainer = styled(Container)<Props>`
  width: ${(props) => (props.isScrolled ? '100%' : '0%')};
  animation: ${widthAnimation} 1s ease-in;
  transition: width 0.3s ease-in-out;
`;

const ExtraStyledSection = styled(StyledSection)<Props>`
  transition: width, padding, margin 0.3s ease-in-out;
  padding-bottom: 4rem;
`;

const ButtonContainer = styled.div`
  position: relative;
  bottom: -16rem;
  display: flex;

  gap: 4rem;
  z-index: 2;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.svg`
  animation: ${bounceAnimation} 1s ${easeInOutCubic} infinite; /* Apply the animation with cubic-bezier timing */

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactStyling = styled.div`
  padding-left: 5rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Landing: React.FC<Props> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollPosition = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const shouldAnimate = scrollDirection === 'down';

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;
    setIsScrolled(currentScrollPosition > 200);

    if (currentScrollPosition < 200) {
      setScrollDirection('up');
    } else {
      setScrollDirection('down');
    }

    prevScrollPosition.current = currentScrollPosition;
  }, []);

  const handleButtonClick = () => {
    scrollToContact();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const button = document.getElementById('scrollToBottomButton');
    if (button) {
      button.addEventListener('click', handleButtonClick);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (button) {
        button.removeEventListener('click', handleButtonClick);
      }
    };
  }, [handleScroll]);
  return (
    <Wrapper
      data-testid="@global/landing-page"
      landingSection={
        <>
          <HeaderSection triangle bgImage={bgImage}>
            <ButtonContainer>
              <Arrow
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="78"
                viewBox="0 0 6 78"
                fill="none"
              >
                <g clip-path="url(#clip0_25_153)">
                  <path
                    d="M3 76.5V1.5"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M3 63.5V43.5"
                    stroke="white"
                    stroke-width="6"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_153">
                    <rect width="6" height="78" fill="white" />
                  </clipPath>
                </defs>
              </Arrow>
            </ButtonContainer>
            <Triangle logoSrc={logo} />
          </HeaderSection>
        </>
      }
      landingContent={
        <>
          <ExtraStyledSection isScrolled={isScrolled}>
            <StyledContainer
              isScrolled={isScrolled}
              shouldAnimate={shouldAnimate}
            >
              <MissionStatement />
              {/* <StyledContentBox isScrolled={isScrolled}>
         
         
              </StyledContentBox> */}
            </StyledContainer>
          </ExtraStyledSection>
        </>
      }
      contentBoxPrimary={
        <>
          {' '}
          <h1 style={{ paddingLeft: '5rem' }}>Projects</h1> <Logos />
        </>
      }
      contentBoxPrimaryExtra={
        <>
          {' '}
          <h1 style={{ paddingLeft: '5rem' }}> Our Clients</h1>{' '}
          <ClientSection />
        </>
      }
      contentBoxSecondary={
        <>
          {' '}
          <ContactStyling>
            {' '}
            <h1> Want to know more?</h1>{' '}
            <p>
              Our knowledgeable team will gladly assist you in understanding how
              our software can align with your business goals.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '3.5rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2875 15.4583 13.9625 15.625C14.6375 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                  fill="red"
                />
              </svg>
              <p id="contact">+31 6 46 33 66 04</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '-1.5rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  d="M10 9L2 4V14H11V16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V9H18V4L10 9ZM10 7L18 2H2L10 7ZM17 19L15.6 17.6L17.175 16H13V14H17.175L15.575 12.4L17 11L21 15L17 19ZM2 4V15V9V9.075V2V4Z"
                  fill="red"
                />
              </svg>
              <p>info@develyp.nl</p>
            </div>
          </ContactStyling>
        </>
      }
    ></Wrapper>
  );
};

export default Landing;
