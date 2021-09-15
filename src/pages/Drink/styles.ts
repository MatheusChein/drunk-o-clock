import styled from "styled-components";

export const DrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  width: 1200px;
  margin: 0 auto;

  h2 {
    align-self: center;
    font-size: 3rem;
    margin-bottom: 3rem;
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
`

export const DrinkIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 15rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`

export const DrinkInstructions = styled.div`
  width: 25rem;
  p {
      margin-top: 1rem;
    }
`