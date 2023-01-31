import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/Register';

describe('Testando página de Login >', () => {
  test('A página tem o título "Cadastro" >', () => {
    render(<Register />);
    const component = screen.getByRole('heading', { name: /cadastro/i });
    expect(component).toBeInTheDocument();
  });

  test('A página tem os inputs de Nome, Email e Senha >', async () => {
    render(<Register />);
    const name = 'Mariana Werneck';
    const nameInput = await screen.getByTestId('common_register__input-name');
    expect(nameInput).toBeInTheDocument();
    const emailInput = await screen.getByTestId('common_register__input-email');
    expect(emailInput).toBeInTheDocument();
    const passInput = await screen.getByTestId('common_register__input-password');
    expect(passInput).toBeInTheDocument();

    await userEvent.type(nameInput, name);
    expect(nameInput.value).toBe(name);
  });

  test('O botão fica desabilitado ao inserir um dado inválido >', async () => {
    render(<Register />);

    const nameInput = await screen.getByTestId('common_register__input-name');
    expect(nameInput).toBeInTheDocument();
    const emailInput = await screen.getByTestId('common_register__input-email');
    expect(emailInput).toBeInTheDocument();
    const passInput = await screen.getByTestId('common_register__input-password');
    expect(passInput).toBeInTheDocument();
    const btnRegister = await screen.getByTestId('common_register__button-register');
    expect(btnRegister).toBeInTheDocument();

    await userEvent.type(nameInput, 'Mariana Werneck');
    await userEvent.type(emailInput, 'marinhomariana8@gmail.com');
    await userEvent.type(passInput, 'mypassword');
    expect(btnRegister).toHaveProperty('disabled', false);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Mariana W');
    expect(btnRegister).toHaveProperty('disabled', true);
  });
});
