import styled from 'styled-components';

export const LoadingCircleContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #d6d6d6;
  border-top: 0.5rem solid var(--dark-pink);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
