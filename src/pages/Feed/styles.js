import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1, p {
    text-align: center;
  }

  h1 {
    margin-top: 24px;
  }
  
  p {
    margin: 12px 0;
  }

  span {
    text-decoration: underline;
  }
`;
