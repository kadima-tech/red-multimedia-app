import styled from 'styled-components';
import logo from '../assets/logo.svg';

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin-top: 4rem;
  padding: 2rem;
  min-width: 90%;
  justify-content: center;

  gap: 1.6rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 1rem;
`;

const ContainerListBottom = styled.ul`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: -1.5rem;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <LogoContainer>
        <img src={logo} alt="Logo" width="30%" />
      </LogoContainer>

      <ContainerListBottom>
        <h4>&copy; {new Date().getFullYear()} Develyp</h4>
      </ContainerListBottom>
    </StyledFooter>
  );
};

export { Footer };
