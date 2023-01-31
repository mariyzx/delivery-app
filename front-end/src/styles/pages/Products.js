import styled from 'styled-components';

export const DivProducts = styled.div`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 1.4rem;
`;

export const Cart = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  button {
    width: 50%;
    background: transparent;
    border: none;
    color: #d69c33;
    text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
             1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
    font-weight: 700;
  }
`;
