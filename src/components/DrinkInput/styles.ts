import styled from 'styled-components';

interface DrinksContainerProps {
  visible: boolean;
}

export const DrinkInputContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  input {
    background: var(--light-pink);
    border: none;
    border-radius: 10px;
    padding: 5px 0.8rem;
    width: 100%;
    font: 400 1.2rem 'Patrick Hand', sans-serif;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 720px) {
    width: 18rem;
  }
`;

export const DrinksContainer = styled.div<DrinksContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  overflow-y: scroll;
  max-height: 15rem;

  &::-webkit-scrollbar {
    width: 10px;
    background: #d6d6d6;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--dark-pink);
    border-radius: 5px;

    &:hover {
      background-color: rgba(131, 90, 253, 0.7);
    }
  }

  div {
    display: flex;
    gap: 1rem;
    padding: 0.8rem 0.5rem;
    background: var(--light-pink);
    border-bottom: 1px solid var(--dark-pink);
    width: 20rem;

    transition: 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 6px;
    }
  }

  @media (max-width: 720px) {
    max-height: 22rem;

    div {
      width: 18rem;
      gap: 0.5rem;
      align-items: center;

      span {
        font-size: 1.3rem;
      }
    }
  }
`;
