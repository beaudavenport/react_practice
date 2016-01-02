import React from 'react';
import ToppingDisplay from './ToppingDisplay';

var ToppingsList = React.createClass({
  render: function() {
    var ListOfToppings = this.props.toppings.map(function(topping) {
      return (
        <ToppingDisplay topping={topping} />
      );
    });
    return (
      <div class="list">
        {ListOfToppings}
      </div>
    );
  }
});

export default ToppingsList;
