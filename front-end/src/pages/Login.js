import React from 'react';
import LoginForm from '../components/LoginForm';
import background from '../images/banner.png';
import LoginScreen from '../styles/pages/Login';

function Login() {
  return (
    <LoginScreen data-testid="main-login">
      <img src={ background } alt="" />
      <h1>Sua bebida a um clique de você!</h1>
      <LoginForm />
    </LoginScreen>
  );
}

export default Login;
