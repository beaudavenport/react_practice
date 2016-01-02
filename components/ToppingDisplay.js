import React from 'react';

var ToppingDisplay = React.createClass({
  render: function() {
    return (
     <li><strong>{this.props.topping.topping}:</strong>${this.props.topping.price}</li>
    );
  }
});

export default ToppingDisplay;
