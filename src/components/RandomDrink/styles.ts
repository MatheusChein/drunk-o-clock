import styled from 'styled-components';

export const RandomDrinkContainer = styled.div`
  padding: 3rem 0 1.5rem;

  h2 {
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 1200px) {
    padding: 1.5rem 0;
    text-align: center;
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 2.5rem;
      padding-bottom: 1rem;
    }
  }
`;
