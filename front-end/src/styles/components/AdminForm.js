import styled from 'styled-components';

export const MainAdmin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  text-align: center;
`;

export const FormAdmin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  label {
    display: flex;
    flex-direction: column;
  }

 label > input {
    margin-top: 2px;
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: #777;
    outline: none;
    background-color: transparent;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding-left: 4px;
  }

  label > input:focus, label > input:hover {
    outline: none;
    border-radius: 5px;
    border-color: #EBEBEB;
  }

  label > input::placeholder {
    color: #777;
    padding: 5px;
  }

  label > input:focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
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
    margin-top: 5px;
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

  select {
    width: 110%;
    padding: 2px;
    border: 1px solid #f2f1f1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: transparent;
    box-shadow: 0 4px 2px -2px #D3D3D3;
    text-align: center;
  }

  .errorRegister {
    text-align: center;
    color: red;
    font-weight: 700;
    margin-top: 10px;
  }
`;
