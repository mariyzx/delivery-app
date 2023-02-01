import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validateLogin } from '../services/api';
import { saveToLocal } from '../services/saveToLocalStorage';

function LoginForm() {
  const [disabled, setDisabled] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const registerNewUser = () => {
    history.push('/register');
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    if (token !== null) history.push('/customer/products');
    const min = 6;
    const validEmail = /\S+@\S+\.\S+/.test(loginData.email);
    const validPassword = loginData.password.length >= min;
    setDisabled(!(validEmail && validPassword));
  }, [loginData, history]);

  const handleChange = ({ target: { name, value } }) => {
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const getRole = (data) => {
    const { role } = data;
    saveToLocal('user', data);
    if (role === 'seller') {
      history.push('/seller/orders');
    }
    if (role === 'administrator') {
      history.push('/admin/manage');
    } else { // + adiciona else
      history.push('/customer/products');
    }
  };

  const handleLogin = async () => {
    try {
      const data = await validateLogin(loginData.email, loginData.password);
      if (data) getRole(data);
      setShowError(false);
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <form>
      <label htmlFor="email-input">
        <span>Login</span>
        <input
          type="email"
          name="email"
          id="email-input"
          onChange={ handleChange }
          value={ loginData.email }
          data-testid="common_login__input-email"
          placeholder="email@trybeer.com.br"
        />
      </label>

      <label htmlFor="password-input">
        <p>Senha</p>
        <input
          type="password"
          name="password"
          id="password-input"
          onChange={ handleChange }
          value={ loginData.password }
          data-testid="common_login__input-password"
          placeholder="Sua senha"
        />
      </label>

      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ disabled }
        onClick={ handleLogin }
      >
        LOGIN
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ registerNewUser }
      >
        Ainda não tenho conta
      </button>

      { showError && (
        <span
          data-testid="common_login__element-invalid-email"
        >
          Elemento oculto(Mensagens de erro)
        </span>
      )}
    </form>
  );
}

export default LoginForm;
