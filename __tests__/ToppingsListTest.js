import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ToppingDisplay from '../components/ToppingDisplay';
import ToppingsList from '../components/ToppingsList';
import assert from 'assert';

describe('ToppingsList', () => {
  it('renders ToppingsDisplay', () => {
    var testToppings = ['Test'];
    var shallowRender = TestUtils.createRenderer();

    shallowRender.render(<ToppingsList toppings={testToppings} />);
    var result = shallowRender.getRenderOutput();

    assert.equal(result.props.children[0].props.topping, 'Test');
  });

});
