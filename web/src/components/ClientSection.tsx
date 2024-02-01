import styled from 'styled-components';

import caredIn from '../assets/caredIn-logo.svg';

export const Logo = styled.img`
  display: flex;
  width: 300px;
  margin-bottom: 4rem;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  width: 100%;
  padding-top: 4rem;
  border-radius: 4px;

  margin-left: 2rem;
  margin-right: 2rem;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;

export const ClientSection = () => {
  return (
    <LogoContainer>
      <a href="https://www.mediaservicemaastricht.nl">
        <Logo src="https://mediaservicemaastricht.nl/wp-content/uploads/2017/10/MSM-logo-wit-retina.png" />
      </a>
      <a href="https://www.cared-in.nl">
        <Logo src={caredIn} />
      </a>
    </LogoContainer>
  );
};

export default ClientSection;
