//tutorial from https://facebook.github.io/jest/docs/tutorial-react.html#content
jest.dontMock('../CheckboxWithLabel');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', function() {

  it('changes the text after click', function() {

    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    var checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('Off');

    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    );

    expect(checkboxNode.textContent).toEqual('On');
  });
});
