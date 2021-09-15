import styled from 'styled-components'

export const SearchDrinkContainer = styled.div`
  width: 1200px;
  padding: 3rem 0 1.5rem;

  h2 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }
`

export const SearchDrinkForm = styled.form`
  width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    display: flex;
    justify-content: space-between;
    width: 100%;

    select {
      cursor: pointer;
      background: var(--light-pink);
      border: none;
      border-radius: 10px;
      padding: 5px 0.8rem;
      width: 20rem;
      font: 400 1.2rem 'Patrick Hand', sans-serif;
      box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

      option:first-child {
        background: var(--dark-pink);
      }
    }
  }
`

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
`

export const DrinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  
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

  
`