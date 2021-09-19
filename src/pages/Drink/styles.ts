import styled from "styled-components";

export const DrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  width: 100%;
  align-items: center;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  a {
    margin-top: 1rem;
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
    }
  }
`

export const DrinkContent = styled.div`
  display: flex;
  gap: 5rem;

  img {
    width: 400px;
    height: 400px;
    border-radius: 20px;
    margin-bottom: 2rem;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  }

  > div {
    display: flex;
    gap: 5rem;
  }

  @media (max-width: 1200px) {
    gap: 4rem;
    padding: 0 4rem;

    img {
      width: 200px;
      height: 200px;
    }

    > div {
      gap: 2.5rem;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`

export const DrinkIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1200px) {
    gap: 0.1rem;
    
    h3 {
      margin-bottom: 0.9rem;
    }
  }

  @media (max-width: 720px) {
    h3 {
      margin-bottom: 0.5rem;
    }

    li {
      font-size: 1.3rem;

      span {
        font-size: 1.3rem;
      }
    }
  }
`

export const DrinkInstructions = styled.div`
  max-width: 20rem;

  p {
    margin-top: 1rem;
  }

  @media (max-width: 1200px) {
    max-width: 15rem;
  }

  @media (max-width: 720px) {
    max-width: 12rem;

    p {
      margin-top: 0.5rem;
      font-size: 1.3rem;
    }
  }
`