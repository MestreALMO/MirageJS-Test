import { Button, Content, Logo, ContentMaxWidth } from "./styles";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Navbar = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <>
      <Content>
        <ContentMaxWidth>
          <Logo>
            <RiMoneyDollarCircleFill />
            <div className="whitePart" />
            Money Calc
          </Logo>

          <Button type="button" onClick={onOpenNewTransactionModal}>
            New Transaction
          </Button>
        </ContentMaxWidth>
      </Content>
    </>
  );
};
