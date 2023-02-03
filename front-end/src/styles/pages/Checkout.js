import styled from 'styled-components';

export const MainCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.5rem;
  gap: 0.5rem;
  text-align: center;

  h1 {
    font-size: 25px;
  }

  input {
    border: 1px solid #f2f1f1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
    box-shadow: 0 4px 2px -2px #D3D3D3;
    text-align: center;
    width: 20%;
  }

  input:focus, input:hover {
    outline: none;
    border-radius: 5px;
    border-color: #EBEBEB;
  }
  
  select {
    padding: 2px;
    border: 1px solid #f2f1f1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
    box-shadow: 0 4px 2px -2px #D3D3D3;
  }

  h1 {
    margin-bottom: 3px;
  }

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
    margin-bottom: 10px;
  }

  button:nth-of-type(2) {
    background: transparent;
    color: #777;
    box-shadow: none;
    text-decoration: underline;
    font-size: 17px;
  }

  button:hover {
    background: rgb(2,0,36);
    background: linear-gradient(to right, #f2b705, #d69c33);
  }

  button:active {
    transform: translate(0em, 0.2em);
  }


`;

export const Total = styled.p`
  font-weight: bolder;
  margin-top: 10px;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Divider = styled.hr`
  width: 15%;
  margin: auto;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: 5px;
  border: 2px solid transparent;
  border-radius: 10px;
  background: linear-gradient(to right, #f2b705, #d69c33);
`;
