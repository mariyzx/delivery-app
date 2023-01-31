import styled from 'styled-components';

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

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
    color: #0d0c22;
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  }

  button:hover {
    background: rgb(2,0,36);
    background: linear-gradient(to right, #f2b705, #d69c33);
  }

  button:active {
    transform: translate(0em, 0.2em);
  }

`;

export default FormDiv;
