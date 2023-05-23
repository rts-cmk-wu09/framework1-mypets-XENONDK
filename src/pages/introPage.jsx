import Image from "../components/Image";
import Heading from "../components/Heading";
import Button from "../components/Button";
import styled from "styled-components";

const StyledP = styled.p`
  color: gray;
  font-size: 20px;
  text-align: center;
  padding: 0 15px;
  margin-top: 10px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const IntroPage = () => {
  return (
    <StyledSection>
      <Image src="../src/assets/animal.png" width="100vw" />
      <Heading as="h1" size={31} align="center" />
      <StyledP>
        Taking care of a pet is my favorite, helps me to gaimr stress and
        fatigue
      </StyledP>
      <Button margin="18vh" />
    </StyledSection>
  );
};

export default IntroPage;
