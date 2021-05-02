import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import {
  Container,
  ContainerSection,
  InfoBox,
  InfoBoxContainer,
} from "./styles";

import { Navbar } from "../../components/Navbar";
import { Table } from "./components/Table";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ContainerSection>
          <InfoBoxContainer>
            <InfoBox className="gettingIn">
              <h4>
                Getting In <FaArrowAltCircleUp />
              </h4>
              <h1>R$ 17.400,00</h1>
            </InfoBox>
            <InfoBox className="gettingOut">
              <h4>
                Getting Out <FaArrowCircleDown />
              </h4>
              <h1>R$ 17.400,00</h1>
            </InfoBox>
            <InfoBox className="total">
              <h4>
                Total <RiMoneyDollarCircleFill />
              </h4>
              <h1>R$ 17.400,00</h1>
            </InfoBox>
          </InfoBoxContainer>

          <br />
          <br />

          <Table />
        </ContainerSection>
      </Container>
    </>
  );
};
