import Modal from "react-modal";
import { VscChromeClose } from "react-icons/vsc";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";

import { Container, ButtonsGettingInAndGettingOut } from "./styles";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <VscChromeClose />
          </button>
          <h1>Cadastrar transação</h1>

          <input placeholder="Name" />
          <input type="number" placeholder="Price" />
          <ButtonsGettingInAndGettingOut>
            <button
              className={
                type === "deposit"
                  ? "buttonOfRegisterTransaction active"
                  : "buttonOfRegisterTransaction"
              }
              onClick={() => {
                setType("deposit");
              }}
            >
              <FaArrowAltCircleUp className="gettingIn" />
              <p>Getting In</p>
            </button>
            <button
              className={
                type === "withdraw"
                  ? "buttonOfRegisterTransaction active"
                  : "buttonOfRegisterTransaction"
              }
              onClick={() => {
                setType("withdraw");
              }}
            >
              <FaArrowCircleDown className="gettingOut" />
              <p>Getting Out</p>
            </button>
          </ButtonsGettingInAndGettingOut>
          <input placeholder="Category" />
          <button className="buttonOfRegisterTransaction buttonCadastrar">
            Cadastrar
          </button>
        </Container>
      </Modal>
    </>
  );
};
