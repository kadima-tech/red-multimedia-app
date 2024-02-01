import { useState, useEffect } from 'react';

import styled from 'styled-components';

import kadima from '../assets/kadima-logo.svg';
import red from '../assets/red-logo.png';
import stinstin from '../assets/stinstin-logo.svg';

// Define the container for the carousel
const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hide overflow to keep logos in view */
  width: 100%; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
`;

// Define the logo component
const Logo = styled.img`
  width: 100px; /* Adjust the size of the logos */
  transition: all 0.3s ease; /* Add a smooth transition */
`;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos = [kadima, red, stinstin]; // Assuming these are imported logos

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval
  }, []);

  return (
    <ProjectContainer>
      {logos.map((logo, index) => (
        <a key={index} href={logos[index]}>
          <Logo
            src={logo}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        </a>
      ))}
    </ProjectContainer>
  );
};

export default Projects;
