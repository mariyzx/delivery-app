import React from 'react';
import Navbar from '../components/Navbar';
import CheckoutCar from '../components/CheckoutCar';

function Checkout() {
  return (
    <div data-testid="main-checkout">
      <Navbar />
      <CheckoutCar />
    </div>
  );
}

export default Checkout;
