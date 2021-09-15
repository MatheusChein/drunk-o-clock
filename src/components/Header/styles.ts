import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  background: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`

export const HeaderContent = styled.div`
  width: 1200px;
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
`