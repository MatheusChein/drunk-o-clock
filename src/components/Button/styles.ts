import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: var(--blue);
  font-weight: 700;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  padding: 0.5rem 0;
  width: 18rem;
  align-self: center;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`