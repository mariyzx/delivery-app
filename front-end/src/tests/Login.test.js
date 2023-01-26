import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

describe('Testando página de Login >', () => {
  test('O componente Login está renderizando >', () => {
    render(<Login />);
    const component = screen.getByTestId('main-login');
    expect(component).toBeInTheDocument();
  });

  test(
    'Ao logar com sucesso, é redirecionado para a página de produtos >',
    async () => {
      const { history } = renderWithRouter(<Login />);

      const EMAIL_USER = 'zebirita@email.com';
      const PASS_USER = '$#zebirita#$';

      const inputEmail = await screen.getByRole('textbox', { name: /login/i });
      expect(inputEmail).toBeInTheDocument();
      const inputPass = await screen.getByLabelText(/senha/i);
      expect(inputPass).toBeInTheDocument();
      const btnLogin = await screen.getByRole('button', {
        name: /login/i,
      });
      expect(btnLogin).toBeInTheDocument();

      await userEvent.type(inputEmail, EMAIL_USER);
      await userEvent.type(inputPass, PASS_USER);
      await userEvent.click(btnLogin);

      history.push('/customer/products');

      expect(history.location.pathname).toBe('/customer/products');
    },
  );

  test('Não é possível logar com dados inválidos >', async () => {
    renderWithRouter(<Login />);
    const EMAIL_USER = 'zebirita@email.com';
    const PASS_USER = '$#zebirita#$2';

    const inputEmail = await screen.getByRole('textbox', { name: /login/i });
    expect(inputEmail).toBeInTheDocument();
    const inputPass = await screen.getByLabelText(/senha/i);
    expect(inputPass).toBeInTheDocument();
    const btnLogin = await screen.getByRole('button', {
      name: /login/i,
    });
    expect(btnLogin).toBeInTheDocument();

    await userEvent.type(inputEmail, EMAIL_USER);
    await userEvent.type(inputPass, PASS_USER);
    await userEvent.click(btnLogin);

    // como o warning ainda nao está na tela, precisamos esperar ele aparecer :)
    await waitFor(() => {
      const erro = screen.getByTestId('common_login__element-invalid-email');
      expect(erro).toBeInTheDocument();
    });
  });

  test('O botão "Ainda nao tenho conta" leva pra rota de registro >', async () => {
    const { history } = renderWithRouter(<Login />);

    const btnRegister = screen.getByTestId('common_login__button-register');
    expect(btnRegister).toBeInTheDocument();
    await userEvent.click(btnRegister);

    history.push('/register');

    expect(history.location.pathname).toBe('/register');
  });
});
