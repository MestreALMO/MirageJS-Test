import styled from "styled-components";

export const Content = styled.header`
  background: var(--blue-600);
  /* color: var(--gray-800); */
`;

export const ContentMaxWidth = styled.div`
  margin: 0 auto;
  padding: 0.5rem 0.5rem 10rem;
  max-width: var(--appMaxWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h2`
  display: flex;
  justify-content: center;

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;

export const Button = styled.button`
  color: inherit;
  background: var(--blue-400);
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 1rem;
  transition: background 0.2s;

  &:hover {
    background: var(--blue-300);
  }
`;
