import styled, { css } from 'styled-components'

interface DrinksContainerProps {
  visible: boolean
}

export const SearchDrinkContainer = styled.div`
  padding: 3rem 0 1.5rem;

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

  @media (max-width: 1200px) {
    width: 20rem;

    label {
      flex-direction: column;
      gap: 0.5rem;
      text-align: left;
    }
  }

  @media (max-width: 720px) {
    width: 15rem;

    label {
      font-size: 1.3rem;
      text-align: center;

      select {
        width: 15rem;
      }
    }

    button {
      margin-top: 0.5rem;
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

  @media (max-width: 720px) {
    width: 15rem;
  }
`

export const DrinksContainer = styled.div<DrinksContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
    
  ${props => props.visible && css`
    height: 15rem;
    overflow-y: scroll;
  `}

  &::-webkit-scrollbar {
    width: 10px;
    background: #d6d6d6;
  }
      
  &::-webkit-scrollbar-thumb {
    background: var(--dark-pink);

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
    height: 20rem;

    div { 
      width: 15rem;
      gap: 0.5rem;
      align-items: center;

      span {
        font-size: 1.3rem;
      }
    }
  }
  
`