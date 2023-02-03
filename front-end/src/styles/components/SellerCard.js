import styled from 'styled-components';

export const MainSeller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 7rem;
  text-align: center;
`;

export const SellerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 7rem;
  text-align: center;

  button {
    background: transparent;
    border: none;
    color: #d69c33;
    text-align: center;
    box-shadow: none;
    padding: 5px;
    margin: 0;
  }

  button:hover {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    button {
      font-size: 12px;
      padding: 0;
      margin: 0;
    }
  }
`;
