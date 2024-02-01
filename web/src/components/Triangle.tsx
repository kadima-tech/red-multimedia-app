import styled from 'styled-components';

const TriangleContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  align-items: flex-end;
`;

const TriangleStyling = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 18rem 100vw;
  border-color: transparent transparent red transparent;
`;

const Logo = styled.img`
  position: absolute;
  z-index: 2;
  max-width: 18rem;

  margin-bottom: 2.5rem;
  right: 1.5rem;

  @media (max-width: 1000px) {
    max-width: 10rem;
  }
`;

const Triangle = ({ logoSrc }: { logoSrc: string }) => {
  return (
    <TriangleContainer>
      <TriangleStyling />
      <Logo src={logoSrc} alt="Logo" />
    </TriangleContainer>
  );
};

export default Triangle;
