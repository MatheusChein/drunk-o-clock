import styled from "styled-components";

export const CategoryContainer = styled.div`
  text-align: left;
  background: var(--light-pink);
  padding: 2rem;
  border-radius: 35px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 2rem;
  }

  @media (max-width: 1200px) {
    padding: 1rem 2rem;

    h3 {
      margin-bottom: 0.8rem;
    }
  }

  @media (max-width: 720px) {
    padding: 1rem 1.5rem 1.5rem;
  }
`

export const DrinksContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    height: 10px;
    background: #d6d6d6;
    border-radius: 4px;
  }
      
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--dark-pink);

    &:hover {
    background-color: rgba(131, 90, 253, 0.7);
    }
  }

  @media (max-width: 720px) {
    gap: 0.8rem;
  }
`

export const DrinkContainer = styled.div`
  div {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;

    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transform: translateY(-10px);
    }

    img {
      margin-top: 10px;
      width: 150px;
      height: 150px;
      border-radius: 15px;
    }
  }

  @media (max-width: 1200px) {
    div {
      img {
        width: 120px;
        height: 120px;
      }

      span {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 720px) {
    div {
      padding-bottom: 0;
      gap: 0.5rem;

      img {
        width: 80px;
        height: 80px;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`