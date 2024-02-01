import styled, { css } from 'styled-components';

interface SectionProps {
  bgImage?: string;
  children?: React.ReactNode;
  style?: object;
  direction?: string;
  bgOpacity?: number;
  bgColor?: string;
  triangle?: boolean;
}

export const StyledSection = styled.section<SectionProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: ${(props) => props.bgColor};
  position: relative;
  z-index: 1;

  ${(props) =>
    props.bgImage &&
    css`
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-image: url(${props.bgImage});
        background-position: 0px calc(50%);
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: ${props.bgOpacity};
      }
    `}

  ${({ direction }) =>
    direction === 'horizontal' &&
    css`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    `}
    @media
    (max-width: 767px) {
    ${(props) =>
      props.bgImage &&
      css`
        &::after {
          background-position: -120px calc(50% - 00px);
          background-position-x: -420px;

          /* Update the background position for mobile devices */
        }
      `}
  }
`;

export const HeaderSection = styled(StyledSection)`
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
`;

const Section = ({
  bgImage,
  children,
  style,
  direction,
  bgColor,
  bgOpacity,
  triangle,
}: SectionProps) => {
  return (
    <StyledSection
      bgImage={bgImage}
      style={style}
      direction={direction}
      bgColor={bgColor}
      bgOpacity={bgOpacity}
      triangle={triangle}
    >
      {children}
    </StyledSection>
  );
};

export { Section };
