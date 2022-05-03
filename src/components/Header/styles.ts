import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  background: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: var(--max-container-width);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--black);

    transition: 0.2s;

    &:hover {
      color: var(--dark-pink);
    }
  }

  > a {
    font-size: 4rem;
    font-weight: 900;
  }

  @media (max-width: 720px) {
    justify-content: center;

    a {
      font-size: 3rem;
    }

    p {
      display: none;
    }
  }
`;
