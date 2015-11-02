import React from 'react';

var ToppingDisplay = React.createClass({
  render: function() {
    debugger;
    return (
     <li><strong>{this.props.topping.topping}:</strong>${this.props.topping.price}</li>
    );
  }
});

var ToppingsList = React.createClass({
  render: function() {
    var toppings = this.props.toppings.map(function(topping) {
      return (
        <ToppingDisplay topping={topping} />
      );
    });
    return (
      <div class="list">
        {topppings}
      </div>
    );
  }
});
