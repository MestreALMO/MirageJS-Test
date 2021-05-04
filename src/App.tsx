import React, { useState } from "react";
import Modal from "react-modal";

import { Homepage } from "./page/homepage";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Homepage onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}

export default App;
