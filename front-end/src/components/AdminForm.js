import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { newUser } from '../services/api';
import { MainAdmin, FormAdmin } from '../styles/components/AdminForm';

function AdminForm() {
  const [disabled, setDisabled] = useState(true);
  const [adminData, setAdminData] = useState(
    { name: '', email: '', password: '', role: 'seller' },
  );
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const minPass = 6;
    const minName = 12;
    const validEmail = /\S+@\S+\.\S+/.test(adminData.email);
    const validPassword = adminData.password.length >= minPass;
    const validName = adminData.name.length >= minName;
    const validRole = adminData.role.length === 0;
    setDisabled(!(validEmail && validPassword && validName && !validRole));
  }, [adminData]);

  const handleChange = ({ target: { name, value } }) => {
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      await newUser(adminData, token);
      setShowError(false);
    } catch (error) {
      setShowError(true);
    }
    setAdminData({ name: '', email: '', password: '', role: 'seller' });
  };

  return (
    <MainAdmin>
      <h1>Cadastrar novo usuario</h1>
      <FormAdmin>
        <label htmlFor="name-input">
          <span>Nome</span>
          <input
            id="name-input"
            name="name"
            onChange={ handleChange }
            value={ adminData.name }
            data-testid="admin_manage__input-name"
            placeholder="Nome e sobrenome"
          />
        </label>

        <label htmlFor="email-input">
          <span>Email</span>
          <input
            id="email-input"
            name="email"
            type="email"
            onChange={ handleChange }
            value={ adminData.email }
            data-testid="admin_manage__input-email"
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
            value={ adminData.password }
            data-testid="admin_manage__input-password"
            placeholder="********"
          />
        </label>

        <label htmlFor="role-input">
          <span>Tipo</span>
          <select
            id="role-input"
            name="role"
            data-testid="admin_manage__select-role"
            onChange={ handleChange }
            value={ adminData.role }
          >
            <option>seller</option>
            <option>administrator</option>
            <option>customer</option>
          </select>

        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ disabled }
          onClick={ handleRegister }
        >
          CADASTRAR
        </button>
        <button
          type="button"
          onClick={ () => history.goBack() }
        >
          VOLTAR
        </button>
      </FormAdmin>
      { showError && (
        <span
          data-testid="admin_manage__element-invalid-register"
          className="errorRegister"
        >
          Erro ao cadastrar usuário!
        </span>
      )}
    </MainAdmin>
  );
}

export default AdminForm;
