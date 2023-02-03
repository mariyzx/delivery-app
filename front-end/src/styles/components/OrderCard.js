import styled from 'styled-components';

export const MainCard = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  button {
    background: transparent;
    color: #777;
    border: 2px solid transparent;
    text-decoration: underline;
    font-size: 17px;
  }
`;

export const LinkPedido = styled.div`
  a:-webkit-any-link {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  a > p:nth-child(1) {
    color: #F9B717;
    font-weight: 700;
  } 

  a > p {
    margin: 2px;
  }
`;
