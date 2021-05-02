import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    text-align: left;
    padding: 0.8rem;
  }

  td {
    background: var(--blue-100);
    color: var(--black);
    text-align: left;
    padding: 0.8rem;
  }
`;
