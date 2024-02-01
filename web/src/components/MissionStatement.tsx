import styled from 'styled-components';

export const MissionStatementSection = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 2.5rem;

  width: 100%;
  color: red;
  border-radius: 6px;
  background-color: white;
  white-space: normal;

  span {
    height: auto;
    margin-right: 2.5rem;
    background-color: white;
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    min-width: 100vw;
  }
`;

export const Statement = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 35vw;
  max-width: 50vw;
  border-left: 3px solid red;
  padding: 2rem;

  h1 {
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    min-width: 90vw;
  }
`;

export const MissionStatement = () => {
  return (
    <>
      <MissionStatementSection>
        <Statement>
          <h1>About </h1>
          <p>
            Born from a desire to create innovative solutions, Red Multimedia
            Development was founded by Maurice Waelen in 2020.<br></br>
            <br></br> Over the years, we've witnessed the ever-evolving
            landscape of multimedia, adapting our skills and expertise to stay
            at the forefront of innovation. From crafting software solutions to
            creating 3D models and capturing captivating images, we've
            endeavoured to deliver high-quality services that meet the needs of
            our clients. <br></br>
            <br></br> In 2024, we embarked on a new chapter by joining the
            Develyp family, a group of companies united by a shared passion for
            excellence. This partnership has opened doors to new opportunities,
            enabling us to expand our reach and provide even more comprehensive
            solutions to our clients.<br></br>
            <br></br>Today, we stand as a team of passionate professionals,
            committed to delivering exceptional services that exceed
            expectations. Guided by our values of innovation, collaboration, and
            customer focus, we're dedicated to helping our clients achieve their
            business objectives. <br></br>
            <br></br>Whether you're seeking software development that
            streamlines operations, captivating visuals that capture attention,
            or 3D creations that bring ideas to life, Red Multimedia Development
            is here to partner with you. We believe in understanding your unique
            needs and collaborating closely to craft customised solutions that
            drive success.<br></br>
            {/* <br></br>As we continue our journey, we remain humbled by the trust
            and confidence our clients have placed in us. We're grateful for the
            opportunity to be part of their success stories and look forward to
            creating many more in the years to come. */}
          </p>
        </Statement>
      </MissionStatementSection>
    </>
  );
};

export default MissionStatement;
