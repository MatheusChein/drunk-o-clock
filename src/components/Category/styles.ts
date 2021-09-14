import styled from "styled-components";

export const CategoryContainer = styled.div`
  background: var(--light-pink);
  padding: 2rem;
  border-radius: 35px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 2rem;
  }  
`
export const DrinksContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;


  &::-webkit-scrollbar {
    height: 10px;
    background: #d6d6d6;
    border-radius: 4px;
  }
      
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--dark-pink);

    &:hover {
    background-color: rgba(131, 90, 253, 0.7);
    }
  }

  div {

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-bottom: 1rem;

      transition: 0.2s;

      &:hover {
        transform: translateY(-10px);
      }

      img {
        margin-top: 10px;
        width: 150px;
        height: 150px;
        border-radius: 15px;
      }
    }
  }
`