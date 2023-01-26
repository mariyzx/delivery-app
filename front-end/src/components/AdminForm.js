import React from 'react';

function AdminComponent() {
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

export default AdminComponent;
