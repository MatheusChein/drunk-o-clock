import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 3rem;
  margin: 0 auto;

  h2 {
    font-size: 5rem;
  }

  @media (max-width: 720px) {
    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`