import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--appMaxWidth);
  margin: -4rem auto 0;
`;

export const ContainerSection = styled.div`
  padding: 0.5rem;
`;

export const InfoBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  min-width: 20rem;
  background: var(--blue-100);
  color: var(--black);

  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  svg {
    font-size: 1.8rem;
  }

  &.gettingIn {
    svg {
      color: var(--green-700);
    }
  }

  &.gettingOut {
    svg {
      color: var(--red-700);
    }
  }

  &.total {
    background: var(--green-400);

    svg {
      color: var(--green-700);
    }
  }
`;
