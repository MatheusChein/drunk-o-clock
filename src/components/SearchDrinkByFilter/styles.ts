import styled from 'styled-components'

export const SearchDrinkByFilterContainer = styled.div`
  padding: 2rem 0 1.5rem;

  h2 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 1200px) {
    text-align: center;
  }

  @media (max-width: 720px) {
    h2 {
     font-size: 2.5rem;
     padding-bottom: 1rem;
    } 
  }
`

export const SearchDrinkByFilterForm = styled.form`
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

  @media (max-width: 1200px) {
    width: 20rem;
    margin: 0 auto;

    label {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 720px) {
    width: 18rem;

    label {
      font-size: 1.3rem;
      text-align: center;

      select {
        width: 18rem;
      }
    }

    button {
      margin-top: 0.5rem;
    }
  }
`
