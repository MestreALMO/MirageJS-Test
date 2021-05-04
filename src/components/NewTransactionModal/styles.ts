import styled from "styled-components";

export const Container = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    margin-bottom: 0.6rem;
  }

  input {
    background: var(--gray-200);
    border: 0.1rem solid var(--gray-300);
    margin-bottom: 0.6rem;
    padding: 0.6rem;
    border-radius: 0.3rem;

    &:hover {
      border: 0.1rem solid var(--gray-400);
    }
  }

  .buttonOfRegisterTransaction {
    margin-bottom: 0.6rem;
    width: 100%;
    padding: 1rem;
    border: 0.1rem solid var(--gray-300);
    border-radius: 0.3rem;
  }

  .buttonCadastrar {
    margin-bottom: 0;
    color: var(--white);
    background: var(--green-500);
    border: 0.1rem solid var(--green-500);
    transition: border 0.2s;

    &:hover {
      border: 0.1rem solid var(--green-600);
    }
  }
`;

export const ButtonsGettingInAndGettingOut = styled.div`
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    border: 0.1rem solid var(--gray-300);

    &:hover {
      border: 0.1rem solid var(--gray-400);
    }

    svg {
      font-size: 1.5rem;
      margin-right: 0.4rem;
    }

    .gettingIn {
      color: var(--green-600);
    }

    .gettingOut {
      color: var(--red-600);
    }

    & + button {
      margin-left: 0.4rem;
    }
  }
`;
