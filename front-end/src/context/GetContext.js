import { useState } from 'react';
import PropTypes from 'prop-types';
import ProvideContext from './ProvideContext';

function GetContext({ children }) {
  const [products, setProducts] = useState([]);

  const { Provider } = ProvideContext;

  const checkoutSome = (object) => {
    const some = products.some(({ id }) => object.id === id);
    if (object.counter > 0 && !some) {
      return setProducts([...products, object]);
    }

    const filterProducts = products.filter(({ id }) => id !== object.id);
    if (object.counter === 0) {
      return setProducts([...filterProducts]);
    }
    return setProducts([...filterProducts, object]);
  };

  const value = {
    products,
    setProducts,
    checkoutSome,
  };

  return (
    <Provider value={ value }>
      {children}
    </Provider>
  );
}

GetContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GetContext;
