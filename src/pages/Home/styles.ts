import styled from "styled-components";

export const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--max-container-width);
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 1200px) {
    padding: 0 2rem;
    gap: 1rem;
  }

  @media (max-width: 720px) {
    padding: 0 1.2rem;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  max-width: --max-container-width;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    justify-content: space-between;
  }


  @media (max-width: 1200px) {
    align-items: center;
    gap: 0;

    > div {
      flex-direction: column;
      align-items: center;
    }
  }
`

