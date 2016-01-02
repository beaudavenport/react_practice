import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import axios from 'axios';
import PizzaApi from '../PizzaApi';
import assert from 'assert';
import sinon from 'sinon';

describe('PizzaApi', () => {
  describe('getToppings', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('calls to api to get toppings and returns a promise', () => {
      let apiStub = sandbox.stub(axios, "get");

      let result = PizzaApi.getToppings();

      assert(apiStub.called, 'You called me brah');
      assert(apiStub.withArgs('localhost/pizzaapisite/toppings').calledOnce, 'you called me with the right arg');
    });
  });
});
