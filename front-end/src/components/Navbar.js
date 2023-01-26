import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clearLS } from '../helpers/localStorage';
// import { fechUser } from '../api/featch';

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // fechUser(setUser);
    setUser({ name: 'Usúario Teste' });
  }, []);

  return (
    <div>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        <h3>PRODUTOS</h3>
      </Link>
      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        <h3>MEUS PEDIDOS</h3>
      </Link>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h3>{ `Usuário: ${user.name}` }</h3>
      </div>
      <Link
        to="/"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => clearLS() }
      >
        <h3>Sair</h3>
      </Link>
    </div>
  );
}

export default Navbar;
