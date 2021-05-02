import { Button, Content, Logo, ContentMaxWidth } from "./styles";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export const Navbar = () => {
  return (
    <>
      <Content>
        <ContentMaxWidth>
          <Logo>
            <RiMoneyDollarCircleFill />
            Money Calc
          </Logo>

          <Button>New Transaction</Button>
        </ContentMaxWidth>
      </Content>
    </>
  );
};
