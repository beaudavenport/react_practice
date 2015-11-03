// // tutorial from https://facebook.github.io/jest/docs/tutorial-react.html#content
// import React from 'react';
//
// class CheckboxWithLabel extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {isChecked: false};
//     this.onChange = this.onChange.bind(this);
//   }
//
//   onChange() {
//     this.setState({isChecked: !this.state.isChecked});
//   }
//
//   render() {
//     return (
//       <label>
//         <input type="checkbox"
//         checked={this.state.isChecked}
//         onChange={this.onChange}
//         />
//         {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
//       </label>
//     );
//   }
// }
//
// export default CheckboxWithLabel;
var React = require('react');

var CheckboxWithLabel = React.createClass({
  getInitialState: function() {
    return {isChecked: false};
  },

  render: function() {
    return (
      <label>
        <input type="checkbox"
        checked={this.state.isChecked}
        onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  },

  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  }
})

module.exports = CheckboxWithLabel;
