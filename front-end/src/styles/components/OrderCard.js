import styled from 'styled-components';

export const MainCard = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  button {
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: #f4bb10;
    font-weight: 30px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 5px;
  }
`;

export const LinkPedido = styled.div`
  a:-webkit-any-link {
    text-decoration: none;
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
