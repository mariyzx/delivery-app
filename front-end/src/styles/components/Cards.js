import styled from 'styled-components';

export const CardDiv = styled.div`
  margin-bottom: 1rem;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #f2f1f1;
  margin: 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 4px 2px -2px #D3D3D3;

  button {
    background: transparent;
    border: none;
    color: #d69c33;
    width: 8%;
    font-weight: 700;
    font-size: 17px;
  }

  input {
    background-color: transparent;
    border: 2px solid transparent;
    text-align: center;
    width: 30%;
  }

  input:focus, input:hover {
    outline: none;
    border-radius: 5px;
    border-color: #777;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  
`;
