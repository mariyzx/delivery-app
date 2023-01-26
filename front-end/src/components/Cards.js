import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import ProvideContext from '../context/ProvideContext';

function Card({ products }) {
  const [some, setSome] = useState(0);
  const { checkoutSome } = useContext(ProvideContext);
  const { id, name, price, urlImage } = products;

  useEffect(() => {
    checkoutSome({ ...products, some });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [some]);

  const addItem = () => setSome(some + 1);

  const removeItem = () => {
    if (some <= 0) {
      return 0;
    }
    setSome(some - 1);
  };

  const handleChange = (event) => {
    const newEvent = Number(event.target.value);
    if (newEvent >= 0) {
      setSome(newEvent);
    }
  };

  return (
    <div className="card-product">
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        width="50px"
      />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `R$ ${price.toString().replace('.', ',')}` }
      </p>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="submit"
        onClick={ addItem }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        onChange={ handleChange }
        min={ 0 }
        value={ Number(some) }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="submit"
        onClick={ removeItem }
      >
        -
      </button>
    </div>
  );
}

Card.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Card;
