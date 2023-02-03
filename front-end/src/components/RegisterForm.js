import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerNewUser } from '../services/api';
import { saveToLocal } from '../services/saveToLocalStorage';
import { FormRegister, MainRegister } from '../styles/components/RegisterForm';

function RegisterForm() {
  const [disabled, setDisabled] = useState(true);
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      const { name, email, password } = registerData;
      const data = await registerNewUser(name, email, password);
      const obj = {
        ...data,
        role: 'customer',
      };
      saveToLocal('user', obj);
      if (data) {
        history.push('/customer/products');
      }
    } catch (error) {
      setShowError(true);
    }
  };

  useEffect(() => {
    const minPass = 6;
    const minName = 12;
    const validEmail = /\S+@\S+\.\S+/.test(registerData.email);
    const validPassword = registerData.password.length >= minPass;
    const validName = registerData.name.length >= minName;
    setDisabled(!(validName && validEmail && validPassword));
  }, [registerData]);

  return (
    <MainRegister>
      <h1>Cadastro</h1>
      <FormRegister>
        <label htmlFor="name-input">
          <span>Nome</span>
          <input
            id="name-input"
            name="name"
            onChange={ handleChange }
            value={ registerData.name }
            data-testid="common_register__input-name" // erro figma
            placeholder="Seu nome"
          />
        </label>

        <label htmlFor="email-input">
          <span>Email</span>
          <input
            id="email-input"
            name="email"
            type="email"
            onChange={ handleChange }
            value={ registerData.email }
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>

        <label htmlFor="password-input">
          <span>Senha</span>
          <input
            id="password-input"
            name="password"
            type="password"
            onChange={ handleChange }
            value={ registerData.password }
            data-testid="common_register__input-password"
            placeholder="********"
          />
        </label>
      </FormRegister>
      <div>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ disabled }
          onClick={ handleRegister }
        >
          CADASTRAR
        </button>

        {showError && (
          <span
            data-testid="common_register__element-invalid_register"
          >
            Erro ao cadastrar!
          </span>
        )}
        <button
          type="button"
          onClick={ () => history.goBack() }
        >
          VOLTAR
        </button>
      </div>
    </MainRegister>
  );
}

export default RegisterForm;
