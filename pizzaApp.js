import React from 'react';
import ReactDOM from 'react-dom';
import ToppingsList from './components/ToppingsList';
require('babel/register');

var toppings = [
  {topping: 'Cheese', price: 1.99},
  {topping: 'Pepperoni', price: 2.99},
  {topping: 'Onion', price: 1.99}
];

ReactDOM.render(<ToppingsList toppings={toppings} />, document.getElementById('root'));
