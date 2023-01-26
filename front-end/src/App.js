import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/products';

function App() {
  return (
    <Switch>
      <Route path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
