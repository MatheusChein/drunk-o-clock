import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0 3rem;

  h2 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 1200px) {
    text-align: center;

    h2 {
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 2.5rem;
      padding-bottom: 1rem;
    }
  }
`

export const CategoriesDrinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 720px) {
    gap: 2rem;
  }
`