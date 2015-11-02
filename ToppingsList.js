import React from 'react';

var ToppingDisplay = React.createClass({
  render: function() {
    return (
     <li><strong>{this.props.topping.topping}:</strong>${this.props.topping.price}</li>
    );
  }
});

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
