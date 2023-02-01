import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clearLS } from '../helpers/localStorage';
import { Header, Menu } from '../styles/components/NavBar';
// import { fechUser } from '../api/featch';

function Navbar() {
  const [user, setUser] = useState({});
  const [menu, setMenu] = useState('');

  useEffect(() => {
    // fechUser(setUser);
    const getUser = JSON.parse(localStorage.getItem('user'));
    setUser({ name: getUser.name });
  }, []);

  const toggleMenu = () => {
    if (menu === 'active') {
      setMenu('');
    } else {
      setMenu('active');
    }
  };

  return (
    <Header>
      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        <h3>{ `${user.name}` }</h3>
      </div>
      <Menu className={ menu }>
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
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => clearLS() }
        >
          <h3>SAIR</h3>
        </Link>
      </Menu>
      <button className="hamburguer" type="button" onClick={ toggleMenu }>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </Header>
  );
}

export default Navbar;
