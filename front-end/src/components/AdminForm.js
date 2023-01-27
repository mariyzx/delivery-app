import React, { useEffect, useState } from 'react';

function AdminForm() {
  const [disabled, setDisabled] = useState(true);
  const [adminData, setAdminData] = useState(
    { name: '', email: '', password: '', role: '' },
  );

  useEffect(() => {
    const minPass = 6;
    const minName = 12;
    const validEmail = /\S+@\S+\.\S+/.test(adminData.email);
    const validPassword = adminData.password.length >= minPass;
    const validName = adminData.name.length >= minName;
    const validRole = adminData.role.length === 0;
    setDisabled(!(validEmail && validPassword && validName && validRole));
  }, [adminData]);

  const handleChange = ({ target: { name, value } }) => {
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Cadastrar novo usuario</h1>
      <form>
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
            <option>Vendedor</option>
            <option>Administrador</option>
            <option>Cliente</option>
          </select>

        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ disabled }
          // onClick={handleRegister}
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default AdminForm;
